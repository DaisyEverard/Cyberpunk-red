import { ButtonHTMLAttributes } from 'react';

import { cn } from '../../utils/button';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        'bg-gradient-to-br from-gradient-dark-bg to-gradient-light-bg text-main-light-text px-4 py-2 rounded-md',
        className,
      )}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
