import {
  ButtonHTMLAttributes,
  ForwardRefRenderFunction,
  forwardRef,
} from 'react';
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

const _Button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
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
  }: ButtonProps,
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
};
export const Button = forwardRef(_Button);
