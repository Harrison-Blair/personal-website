'use client';

import { useEffect, useRef } from 'react';

/*
 * ASCII penguin walk-cycle, designed to be cleanly reversible: every glyph is
 * either mirror-symmetric or has a horizontal-mirror partner (see MIRROR_MAP),
 * so the right-facing set is the reflection of the left-facing set — directional
 * glyphs point the right way without flipping the canvas. Author the LEFT set
 * only; the RIGHT set is derived from it. Side view, the bottom (feet) line
 * cycles through three positions to animate the waddle:
 *
 *    <(")        head + beak       (left-facing shown; right is the mirror)
 *    (||)        striped belly
 *    /__\        rounded body
 *    /|          shuffling feet
 */

// Glyphs that swap under a horizontal mirror; anything else maps to itself.
const MIRROR_MAP: Readonly<Record<string, string>> = {
  '(': ')',
  ')': '(',
  '<': '>',
  '>': '<',
  '/': '\\',
  '\\': '/',
  '[': ']',
  ']': '[',
  '{': '}',
  '}': '{',
};

const mirrorLine = (line: string) =>
  [...line].reverse().map((ch) => MIRROR_MAP[ch] ?? ch).join('');
const mirrorFrame = (frame: readonly string[]) => frame.map(mirrorLine);

// LEFT set travels left (beak points left). Each frame is 4 lines; only the
// bottom (feet) line changes across the 3-step cycle.
const FRAMES_LEFT: readonly string[][] = [
  [' <(")', ' (||)', ' /__\\', ' /|  '],
  [' <(")', ' (||)', ' /__\\', ' /\\  '],
  [' <(")', ' (||)', ' /__\\', '  |\\ '],
];

// RIGHT set travels right — the exact horizontal mirror of the left set.
const FRAMES_RIGHT: readonly string[][] = FRAMES_LEFT.map(mirrorFrame);

const FRAME_COUNT = 3;
const LINES_PER_FRAME = 4;
const GLYPH_COLOR = '#f1f5f9'; // --foreground
const PENGUIN_WIDTH_CHARS = 6; // widest frame line, used for off-edge recycling

interface Penguin {
  x: number; // CSS px, left origin of the glyph block
  depth: number; // [0,1]; 0 = near (big/fast/low), 1 = far (small/slow/high/dim)
  dir: 1 | -1; // travel direction: +1 right, -1 left
  speed: number; // CSS px/sec (derived from depth)
  fontSize: number; // integer px (derived from depth)
  topY: number; // integer y of the block's top line (derived from depth)
  opacity: number; // (derived from depth)
  frame: number; // current walk-frame index (0..2)
  frameTimer: number; // ms accumulator for the walk-frame swap
  framePeriod: number; // ms per walk-frame swap (~110–160), randomized per penguin
}

interface PenguinParadeProps {
  minCount?: number;
  maxCount?: number;
  height?: number;
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const randRange = (min: number, max: number) => min + Math.random() * (max - min);

export default function PenguinParade({
  minCount = 4,
  maxCount = 9,
  height = 160,
}: Readonly<PenguinParadeProps>) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const penguinsRef = useRef<Penguin[]>([]);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let cancelled = false;

    // Resolve the monospace font (CSS var() is not valid in ctx.font).
    const monoVar = getComputedStyle(document.documentElement)
      .getPropertyValue('--font-proto-mono')
      .trim();
    const fontStack = monoVar ? `${monoVar}, monospace` : 'monospace';
    const fontFor = (size: number) => `${size}px ${fontStack}`;

    // Monospace advance width ÷ font size, measured for the chosen font.
    ctx.font = fontFor(100);
    const charAspect = ctx.measureText('M').width / 100 || 0.6;

    const derive = (penguin: Penguin) => {
      const d = penguin.depth;
      penguin.fontSize = Math.round(lerp(26, 12, d));
      penguin.speed = lerp(40, 14, d);
      penguin.opacity = lerp(1, 0.45, d);
      const lineHeight = penguin.fontSize;
      const waterTop = lerp(height - lineHeight * 1.5, height * 0.3, d);
      penguin.topY = Math.round(waterTop - (LINES_PER_FRAME - 1) * lineHeight);
    };

    const buildPenguins = () => {
      const cssWidth = canvas.clientWidth;
      const count = Math.round(randRange(minCount, maxCount));
      const penguins: Penguin[] = [];
      for (let i = 0; i < count; i++) {
        const penguin: Penguin = {
          x: 0,
          depth: Math.random(),
          dir: Math.random() < 0.5 ? 1 : -1,
          speed: 0,
          fontSize: 0,
          topY: 0,
          opacity: 1,
          frame: Math.floor(Math.random() * FRAME_COUNT),
          frameTimer: 0,
          framePeriod: randRange(110, 160),
        };
        derive(penguin);
        penguin.x = randRange(0, cssWidth);
        penguins.push(penguin);
      }
      penguinsRef.current = penguins;
    };

    const blockWidth = (penguin: Penguin) =>
      PENGUIN_WIDTH_CHARS * penguin.fontSize * charAspect;

    const sizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const cssWidth = canvas.clientWidth;
      canvas.width = Math.round(cssWidth * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.textBaseline = 'top';
    };

    const drawPenguin = (penguin: Penguin) => {
      const frames = penguin.dir === -1 ? FRAMES_LEFT : FRAMES_RIGHT;
      const lines = frames[penguin.frame];
      const lineHeight = penguin.fontSize;
      ctx.font = fontFor(penguin.fontSize);
      ctx.globalAlpha = penguin.opacity;
      const x = Math.round(penguin.x);
      for (let i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i], x, penguin.topY + i * lineHeight);
      }
    };

    const drawAll = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = GLYPH_COLOR;
      // Painter's algorithm: farthest (depth→1) first, nearest (depth→0) last.
      const ordered = [...penguinsRef.current].sort((a, b) => b.depth - a.depth);
      for (const penguin of ordered) drawPenguin(penguin);
      ctx.globalAlpha = 1;
    };

    const tick = (now: number) => {
      if (cancelled) return;
      const cssWidth = canvas.clientWidth;
      const msDelta = now - lastTimeRef.current;
      lastTimeRef.current = now;
      const dt = msDelta / 1000;

      for (const penguin of penguinsRef.current) {
        penguin.x += penguin.dir * penguin.speed * dt;

        // Independent walk-frame timer (decoupled from render rate).
        penguin.frameTimer += msDelta;
        while (penguin.frameTimer >= penguin.framePeriod) {
          penguin.frameTimer -= penguin.framePeriod;
          penguin.frame = (penguin.frame + 1) % FRAME_COUNT;
        }

        // Recycle to the opposite edge once fully off-screen.
        const w = blockWidth(penguin);
        if (penguin.dir === 1 && penguin.x > cssWidth) penguin.x = -w;
        else if (penguin.dir === -1 && penguin.x + w < 0) penguin.x = cssWidth;
      }

      drawAll();
      rafRef.current = requestAnimationFrame(tick);
    };

    const stopLoop = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    const startLoop = () => {
      stopLoop();
      lastTimeRef.current = performance.now();
      rafRef.current = requestAnimationFrame(tick);
    };

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const render = () => {
      if (motionQuery.matches) {
        // Reduced motion: single static frame of stationary penguins.
        stopLoop();
        for (const penguin of penguinsRef.current) penguin.frame = 0;
        drawAll();
      } else {
        startLoop();
      }
    };

    const handleResize = () => {
      sizeCanvas();
      if (motionQuery.matches) drawAll();
    };

    const handleMotionChange = () => render();

    // Wait for fonts so glyph metrics (and CHAR_ASPECT) are accurate.
    const init = async () => {
      if (document.fonts?.ready) await document.fonts.ready;
      if (cancelled) return;
      // Re-measure aspect now that the real font is loaded.
      ctx.font = fontFor(100);
      sizeCanvas();
      buildPenguins();
      render();
    };
    init();

    window.addEventListener('resize', handleResize);
    motionQuery.addEventListener('change', handleMotionChange);

    return () => {
      cancelled = true;
      stopLoop();
      window.removeEventListener('resize', handleResize);
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, [minCount, maxCount, height]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed bottom-[var(--nav-size)] left-0 w-full lg:bottom-0"
      style={{ height }}
    />
  );
}
