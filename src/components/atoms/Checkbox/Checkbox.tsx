import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../../utils';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * 체크박스의 내용을 설정합니다.
   */
  children?: React.ReactNode;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { children, className, ...props },
  forwardRef,
) {
  return (
    <label className="flex  gap-3">
      <input
        ref={forwardRef}
        type="checkbox"
        className={cn(
          `flex items-center justify-center border-none text-current`,
          className,
        )}
        {...props}
      />
      <span>{children}</span>
    </label>
  );
});

export default Checkbox;
