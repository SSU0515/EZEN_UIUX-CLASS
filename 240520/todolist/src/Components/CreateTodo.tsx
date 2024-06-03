import React from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import { IToDo, toDoState, categoryState } from "./atoms";

export interface IForm {
  toDo: string;
}

const CreateTodo = () => {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  // const value = useRecoilValue(toDoState);
  // const modFn = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleVaild = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { id: Date.now(), text: toDo, category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  return (
    <form
      onSubmit={handleSubmit(handleVaild)}
      style={{
        display: "flex",
        gap: "10px",
      }}
    >
      <input
        {...register("toDo", {
          required: "할 일을 입력해주세요",
        })}
        type="text"
        placeholder="할 일을 입력해주세요..."
      />
      <button>추가</button>
    </form>
  );
};

export default CreateTodo;
