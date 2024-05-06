import React from 'react';

const styles = {
  primary: 'bg-primary-dark text-white hover:bg-primary rounded-md p-2',
  bordered:
    'border border-primary-dark  text-primary-dark hover:bg-primary rounded-md p-1',
};

type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  'type'
> & { type?: keyof typeof styles };

export const Button = ({
  children,
  className,
  type = 'primary',
  ...rest
}: ButtonProps) => {
  return (
    <div className="p-4">
      <button className={`${styles[type]} px-4  ${className}`} {...rest}>
        {children}
      </button>
    </div>
  );
};
