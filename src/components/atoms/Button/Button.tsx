import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'link';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
  block?: boolean;
  icon?: React.ReactNode;
  iconRight?: boolean;
}
const ButtonVariants = cva(
  `inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 `,
  {
    variants: {
      variant: {
        contained: [
          'bg-blue-500',
          'text-white',
          'border-transparent',
          'hover:bg-blue-600',
        ],
        outlined: [
          'bg-transparent',
          'text-blue-500',
          'border-2',
          'border-blue-500',
          'hover:bg-blue-50',
        ],
        link: [
          'bg-transparent',
          'text-blue-500',
          'border-transparent',
          'hover:bg-blue-50',
        ],
      },
      size: {
        xs: ['text-sm', 'py-1', 'px-1'],
        sm: ['text-base', 'py-2', 'px-2'],
        md: ['text-base', 'py-3', 'px-3'],
        lg: ['text-base', 'py-4', 'px-4'],
      },
    },
  },
);

// eslint-disable-next-line react/display-name
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'contained',
      size = 'md',
      block,
      icon,
      iconRight = false,
      disabled = false,
      ...props
    },
    forwardRef,
  ) => {
    return (
      <button
        aria-disabled={disabled}
        disabled={disabled}
        ref={forwardRef}
        className={cn(
          ButtonVariants({ variant, size, className }),
          block && 'block w-full',
          icon && 'inline-flex gap-1',
        )}
        {...props}
      >
        {icon && !iconRight && icon}
        {children}
        {icon && iconRight && icon}
      </button>
    );
  },
);

export default Button;
