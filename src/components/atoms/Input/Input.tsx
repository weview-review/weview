import { cva } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';
import { cn } from '../../../utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * label을 함께 입력할 수 있습니다.
   */
  label?: string;
  /**
   * Input의 스타일 타입을 지정합니다.
   */
  variant?: 'outlined' | 'borderless' | 'filled';
}
const InputVariants = cva(
  `flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
  {
    variants: {
      variant: {
        outlined: ['border-input', 'bg-background', 'px-3', 'py-2', 'text-sm'],
        borderless: ['border-0', 'bg-transparent', 'text-sm', 'font-medium'],
        filled: ['border-0', 'bg-gray-300', 'text-sm'],
      },
    },
  },
);

const Input = ({
  label,
  variant = 'outlined',
  className,
  ...props
}: InputProps) => {
  return (
    <div className="flex items-center gap-3">
      {label && <label htmlFor={label}>{label}</label>}
      <input
        aria-label="input"
        className={cn(InputVariants({ variant, className }))}
        {...props}
      />
    </div>
  );
};

export default Input;
