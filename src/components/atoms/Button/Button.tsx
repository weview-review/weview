import { ButtonHTMLAttributes, ForwardedRef } from 'react';
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
  isLoading?: boolean;
  ref?: ForwardedRef<HTMLButtonElement>;
  block?: boolean;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
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
        sm: ['text-base', 'py-2', 'px-3'],
        md: ['text-base', 'py-3', 'px-5'],
        lg: ['text-base', 'py-4', 'px-6'],
      },
    },

    defaultVariants: {
      variant: 'contained',
      size: 'sm',
    },
  },
);

const Button = ({
  children,
  className,
  variant,
  size,
  ref,
  block,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) => {
  return (
    <button
      aria-disabled={props.disabled}
      className={cn(
        ButtonVariants({ variant, size, className }),
        block && 'w-full',
        (leftIcon || rightIcon) && 'gap-1',
      )}
      ref={ref}
      {...props}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
};
Button.displayName = 'Button';
export { Button, ButtonVariants };
