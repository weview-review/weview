import { cn } from '../../../utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * label을 함께 입력할 수 있습니다.
   */
  label?: string;
}

const Textarea = ({ label, className, ...props }: TextareaProps) => {
  return (
    <>
      {label && <label htmlFor={label}>{label}</label>}
      <textarea
        className={cn(
          `          "flex border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring disabled:opacity-50", min-h-[80px] w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed
        `,
          className,
        )}
        {...props}
      />
    </>
  );
};

export default Textarea;
