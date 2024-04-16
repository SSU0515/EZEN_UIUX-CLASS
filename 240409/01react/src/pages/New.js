import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../component/Header";
import Button from "../component/Button";
import Editor from "../component/Editor";
import { DiaryStateContext } from "../App";

const New = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <Header
        leftChild={<Button onClick={goBack} text="< 뒤로가기" />}
        title="새일기 쓰기"
      />
      <Editor />
    </div>
  );
};

export default New;
