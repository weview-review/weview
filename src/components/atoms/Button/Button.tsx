import React from 'react';
import { ButtonHTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../../utils';

type IconProps = {
  icon: React.ReactNode;
  position?: 'left' | 'right';
  gap?: 'sm' | 'md' | 'lg';
};

type ButtonIcon = React.ReactNode | IconProps;
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 버튼 스타일 타입을 지정합니다.
   */
  variant?: 'contained' | 'outlined' | 'link';
  /**
   * 버튼의 크기를 지정합니다.
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * 버튼의 이름을 설정합니다. 이름은 `ReactNode` 타입으로 설정할 수 있습니다.
   */
  children?: React.ReactNode;
  /**
   * 버튼에 아이콘을 추가할 수 있습니다. 기본적으로 ReactNode를 지원하며, 상세하게 설정하길 원하면 object 타입으로 넘겨주어 사용할 수 있습니다.
   * `ReactNode` or `{ icon, position, gap }`
   */
  icon?: ButtonIcon;
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
          'hover:text-blue-400',
        ],
      },
      size: {
        sm: ['text-base', 'p-1'],
        md: ['text-base', 'p-2'],
        lg: ['text-base', 'p-3'],
      },
    },
    defaultVariants: {
      variant: 'contained',
      size: 'md',
    },
  },
);

const IconContainerVariants = cva(`flex items-center justify-center`, {
  variants: {
    gap: {
      sm: ['gap-1'],
      md: ['gap-2'],
      lg: ['gap-4'],
    },
  },
  defaultVariants: { gap: 'md' },
});

const IconGenerator = ({
  icon,
  children,
}: { icon?: ButtonIcon } & PropsWithChildren) => {
  if (!icon) {
    return children;
  }
  if (typeof icon === 'object' && 'icon' in icon) {
    return (
      <div className={cn(IconContainerVariants({ gap: icon?.gap || 'md' }))}>
        {icon.position !== 'right' && icon.icon}
        {children}
        {icon.position === 'right' && icon.icon}
      </div>
    );
  } else {
    return (
      <div className={cn(IconContainerVariants())}>
        {React.isValidElement(icon) ? icon : null}
        {children}
      </div>
    );
  }
};

/**
 * 상호작용 할 수 있는 버튼 컴포넌트 입니다.
 */
// eslint-disable-next-line react/display-name
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, className, variant, size, icon, disabled = false, ...props },
    forwardRef,
  ) => {
    return (
      <button
        aria-disabled={disabled}
        disabled={disabled}
        ref={forwardRef}
        className={cn(ButtonVariants({ variant, size, className }))}
        {...props}
      >
        <IconGenerator icon={icon}>{children}</IconGenerator>
      </button>
    );
  },
);

export default Button;
