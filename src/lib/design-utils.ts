// Design utility functions and constants
// Easy access to design tokens throughout the project

import { designTokens } from './design-tokens';

// Export commonly used design tokens
export const { colors, typography, shadows, spacing, borderRadius, components } = designTokens;

// Utility functions for common design patterns
export const getColor = (colorPath: string) => {
  const keys = colorPath.split('.');
  let value: any = colors;
  for (const key of keys) {
    value = value?.[key];
  }
  return value;
};

// Common class combinations
export const commonClasses = {
  // Buttons
  btnPrimary: 'btn-primary',
  btnSecondary: 'btn-secondary',

  // Typography
  heading1: 'heading-1',
  heading2: 'heading-2',
  heading3: 'heading-3',
  textBody: 'text-body',
  textCaption: 'text-caption',

  // Layout
  card: 'card',
  input: 'input',

  // Spacing
  sectionPadding: 'py-24',
  containerPadding: 'px-4 sm:px-6',

  // Colors
  textPrimary: 'text-neutral-900',
  textSecondary: 'text-neutral-600',
  textMuted: 'text-neutral-500',
  bgPrimary: 'bg-primary-600',
  bgSecondary: 'bg-neutral-100',
  borderDefault: 'border-neutral-200',
} as const;

// Animation presets
export const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, ease: 'easeOut' },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  stagger: {
    initial: 'hidden',
    animate: 'show',
    variants: {
      hidden: {},
      show: { transition: { staggerChildren: 0.08 } },
    },
  },
} as const;

// Responsive breakpoints
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Common gradients
export const gradients = {
  primary: 'bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700',
  neutral: 'bg-gradient-to-r from-neutral-100 to-neutral-200',
  hero: 'bg-gradient-to-br from-primary-50 via-white to-neutral-50',
} as const;

// Shadow presets
export const shadowPresets = {
  card: 'shadow-md',
  cardHover: 'shadow-lg',
  button: 'shadow-red-md',
  buttonHover: 'shadow-red-lg',
  modal: 'shadow-2xl',
} as const;
