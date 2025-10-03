'use client';

import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string[];
  styling?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
  cursor?: string;
}

export default function TypewriterText({
  text,
  styling = '',
  typeSpeed = 150,
  deleteSpeed = 100,
  delayBetweenWords = 3000,
  cursor = '|',
}: Readonly<TypewriterTextProps>) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    const currentWord = text[currentWordIndex];
    const speed = isTyping ? typeSpeed : deleteSpeed;

    const timeout = setTimeout(() => {
      setWaiting(false);
      const newText = isTyping
        ? currentWord.slice(0, displayedText.length + 1)
        : currentWord.slice(0, displayedText.length - 1);

      setDisplayedText(newText);

      if (isTyping && newText === currentWord) {
        // Finished typing, wait then start deleting
        setWaiting(true);
        setTimeout(() => setIsTyping(false), delayBetweenWords);
      } else if (!isTyping && newText === '') {
        // Finished deleting, move to next word
        setIsTyping(true);
        setCurrentWordIndex((prev) => (prev + 1) % text.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, currentWordIndex, isTyping, text, typeSpeed, deleteSpeed, delayBetweenWords]);

  return (
    <span className={styling}>
      {displayedText}
      <span className={waiting ? "animate-blink" : ""}>{cursor}</span>
    </span>
  );
}