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
        <div className={`${styling} ${border} ${background}`}>
            <Image
                src={imageUrls[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                fill={true}
                style={{ objectFit: 'contain' }}
            />
            <ChevronLeft
                className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer hover:text-[var(--accent)] p-2 transition-all duration-200"
                size={'6vh'}
                onClick={() => setCurrentIndex((currentIndex - 1 + imageUrls.length) % imageUrls.length)}
            />
            <ChevronRight
                className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer hover:text-[var(--accent)] p-2 transition-all duration-200"
                size={'6vh'}
                onClick={() => setCurrentIndex((currentIndex + 1) % imageUrls.length)}
            />
        </div>
    );
}