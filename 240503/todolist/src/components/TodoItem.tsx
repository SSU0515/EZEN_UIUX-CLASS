import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Label = styled.div`
  font-size: 2rem;
  flex: 1;
  margin-bottom: 16px;
`;

interface Props {
  label: string;
  onDelete?: () => void;
}

const TodoItem = ({ label, onDelete }: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Button label="삭제" onClick={onDelete} />
    </Container>
  );
};

export default TodoItem;
