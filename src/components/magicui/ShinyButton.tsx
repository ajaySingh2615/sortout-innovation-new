import * as React from 'react';
import { cn } from '../../lib/cn';

type ShinyButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
};

export default function ShinyButton({ className, children, ...props }: ShinyButtonProps) {
  return (
    <button
      className={cn(
        'relative inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5',
        'font-medium text-white transition-transform duration-200',
        'bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500',
        'shadow-[0_2px_10px_rgba(37,99,235,0.35)] hover:shadow-[0_6px_22px_rgba(37,99,235,0.45)]',
        'hover:scale-[1.02] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-blue-500',
        className
      )}
      {...props}
    >
      <span className="relative z-[1]">{children}</span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-r from-white/10 to-white/0 opacity-60"
      />
    </button>
  );
}
