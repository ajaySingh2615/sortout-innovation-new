import * as React from 'react';
import { cn } from '../../lib/cn';

interface RevolvingBorderProps {
  children: React.ReactNode;
  className?: string;
  borderWidth?: number;
  borderColor?: string;
  borderOpacity?: number;
  duration?: number;
}

export default function RevolvingBorder({
  children,
  className,
  borderWidth = 2,
  borderColor = '#D32F2F',
  borderOpacity = 0.8,
  duration = 4,
}: RevolvingBorderProps) {
  return (
    <div className={cn('relative rounded-2xl', className)}>
      {/* Content */}
      <div className="relative z-10 bg-white/80 backdrop-blur-lg rounded-2xl p-6">{children}</div>

      {/* Revolving border using box-shadow */}
      <div
        className="absolute inset-0 rounded-2xl animate-spin"
        style={{
          background: `conic-gradient(from 0deg, transparent, ${borderColor}, transparent)`,
          animationDuration: `${duration}s`,
          opacity: borderOpacity,
          padding: '2px',
        }}
      >
        <div className="w-full h-full rounded-2xl bg-transparent" />
      </div>
    </div>
  );
}
