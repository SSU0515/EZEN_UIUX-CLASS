import React, { useContext } from "react";
import { TodoDispatchContext } from "../App";
import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, createDate }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);
  const onchangeCheckbox = () => {
    onUpdate(id);
  };
  const onClickDelete = () => {
    onDelete(id);
  };
  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input onChange={onchangeCheckbox} checked={isDone} type="checkbox" />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">
        {new Date(createDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onClickDelete}>❌</button>
      </div>
    </div>
  );
};

export default React.memo(TodoItem);
