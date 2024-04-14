import React from 'react';

const styles = {
  primary: 'bg-primary-dark text-white hover:bg-primary ',
  bordered: 'border border-primary-dark  text-primary-dark hover:bg-primary s',
};

type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  'type'
> & { type?: keyof typeof styles };

const Button = ({
  children,
  className,
  type = 'primary',
  ...rest
}: ButtonProps) => {
  return (
    <div className="p-4">
      <button
        className={`${styles[type]} p-2 px-4 rounded-full ${className}`}
        {...rest}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
