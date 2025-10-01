import * as React from 'react';
import { cn } from '../../lib/cn';

type ShinyButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
};

export default function ShinyButton({ className, children, ...props }: ShinyButtonProps) {
  return (
    <button
      className={cn(
        'relative inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3',
        'font-semibold text-white transition-all duration-200',
        'bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700',
        'shadow-red-lg hover:shadow-red-xl',
        'hover:scale-[1.02] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
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
