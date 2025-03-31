'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrolled = window.scrollY;
      containerRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div ref={containerRef} className="absolute inset-0 animate-hero-zoom">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image3.jpg-BElJrBAgDcOAjR00b7df3ULBtoWewE.jpeg"
          alt="Solar panel farm under bright sun"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/50 to-transparent">
          {/* <h1 className="font-life text-4xl h-full flex items-center justify-center">Solar Energy Insights Platform</h1> */}
        </div>
      </div>
    </div>
  );
}
