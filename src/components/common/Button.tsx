import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <button
      className="bg-gradient-to-br from-gradient-dark-bg to-gradient-light-bg text-main-light-text px-4 py-2 rounded-md"
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
