import React, { useState } from "react";
import { styled } from "styled-components";

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border: 6px solid ${(props) => props.borderColor};
  border-radius: 200px;
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

interface ContainerProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Circle = ({
  bgColor,
  borderColor,
  text = "default text",
}: CircleProps) => {
  const [counter, setCounter] = useState(1);
  setCounter(0);
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
};

export default Circle;
