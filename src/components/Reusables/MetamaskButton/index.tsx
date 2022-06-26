import React from "react";

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
}

export const MetamaskButton = ({
  onClick,
  disabled,
  children,
  className,
}: ButtonProps) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
