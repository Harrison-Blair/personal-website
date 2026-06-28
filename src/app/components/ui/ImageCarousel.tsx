'use client';

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export interface ImageCarouselProps {
    imageUrls: string[];
    border?: string;
    styling?: string;
    background?: string;
}

export default function ImageCarousel({
    imageUrls,
    border = '',
    styling = '',
    background = 'bg-slate-950',
}: Readonly<ImageCarouselProps>) {
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <div className={`${styling} ${border} ${background} overflow-hidden`}>
            <Image
                src={imageUrls[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                fill={true}
                sizes="(max-width: 1023px) 100vw, 50vw"
                loading="eager"
                className='object-contain'
            />
            <button
                type="button"
                aria-label="Previous image"
                className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer hover:text-[var(--accent)] transition-all duration-200"
                onClick={() => setCurrentIndex((currentIndex - 1 + imageUrls.length) % imageUrls.length)}
            >
                <ChevronLeft className="p-2" size={'5rem'} />
            </button>
            <button
                type="button"
                aria-label="Next image"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer hover:text-[var(--accent)] transition-all duration-200"
                onClick={() => setCurrentIndex((currentIndex + 1) % imageUrls.length)}
            >
                <ChevronRight className="p-2" size={'5rem'} />
            </button>
        </div>
    );
}