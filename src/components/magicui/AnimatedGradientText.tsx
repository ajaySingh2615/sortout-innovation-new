import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/cn';

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
  gradientVia?: string;
  duration?: number;
}

export default function AnimatedGradientText({
  children,
  className,
  gradientFrom = '#D32F2F',
  gradientTo = '#000000',
  gradientVia,
  duration = 3,
}: AnimatedGradientTextProps) {
  const gradientStyle = gradientVia
    ? `linear-gradient(45deg, ${gradientFrom}, ${gradientVia}, ${gradientTo})`
    : `linear-gradient(45deg, ${gradientFrom}, ${gradientTo})`;

  return (
    <motion.span
      className={cn('relative inline-block', className)}
      style={{
        background: gradientStyle,
        backgroundSize: '200% 200%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.span>
  );
}
