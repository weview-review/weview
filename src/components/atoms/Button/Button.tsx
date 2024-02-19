import React, { ButtonHTMLAttributes } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  children?: React.ReactNode;
  additionalClass?: string;
  isLoading?: boolean;
}

const ButtonVariants = cva(
  `inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50`,
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
          'text-gray-800',
          'border-transparent',
          'hover:bg-gray-100',
        ],
        link: [
          'bg-transparent',
          'text-blue-500',
          'border-transparent',
          'hover:bg-blue-50',
        ],
      },
      size: {
        xs: ['text-sm', 'py-1', 'px-2'],
        sm: ['text-base', 'py-2', 'px-4'],
        md: ['text-base', 'py-3', 'px-5'],
        lg: ['text-base', 'py-4', 'px-6'],
      },
    },

    defaultVariants: {
      variant: 'contained',
      size: 'lg',
    },
  },
);

const Button = ({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(ButtonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
