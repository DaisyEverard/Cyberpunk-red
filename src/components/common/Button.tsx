import { ButtonHTMLAttributes } from 'react';

import { cn } from '../../utils/button';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: string };

const variantClasses: Record<string, string> = {
  default: 'px-4 py-2 bg-gradient-to-br from-gradient-dark-bg to-gradient-light-bg text-main-light-text rounded-md',
  noBackground: 'px-2 py-1 border-2 text-xs rounded-md text-damage-red border-damage-red bg-none',
  round:
    'w-[30px] h-[30px] rounded-full font-bold bg-gradient-to-br from-gradient-dark-bg to-gradient-light-bg text-main-light-text',
};

const Button = ({ className, variant = 'default', ...props }: ButtonProps) => {
  return (
    <button
      className={cn(variantClasses[variant], className)}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
