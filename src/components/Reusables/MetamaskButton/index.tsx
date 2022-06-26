import React from "react";

import styled from "styled-components";

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
}

const Button = styled.button`
  font-family: Rubik, sans-serif;
  width: 157px;
  height: 40px;
  left: 244px;
  top: 288px;
  background: #9600bc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  color: #fff;
  margin-right: 85px;
`;

export const MetamaskButton = ({
  onClick,
  disabled,
  children,
  className,
}: ButtonProps) => {
  return (
    <Button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
};
