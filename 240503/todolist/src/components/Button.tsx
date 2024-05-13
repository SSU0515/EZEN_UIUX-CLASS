import React from "react";
import styled from "styled-components";

const Container = styled.button`
  background: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    box-shadow: 0px 0px 0px 5px rgba(0, 0, 0, 0.2);
  }
`;

interface Props {
  label: string;
  onClick?: () => void;
}

const Button = ({ label, onClick }: Props) => {
  return <Container onClick={onClick}>{label}</Container>;
};

export default Button;
