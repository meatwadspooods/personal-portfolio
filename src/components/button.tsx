import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
};

// button component
const Button = ({
  children,
  onClick,
  className = "",
  icon,
}: ButtonProps): React.ReactElement => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer px-3 py-1 rounded text-white flex items-center ${className}`}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
