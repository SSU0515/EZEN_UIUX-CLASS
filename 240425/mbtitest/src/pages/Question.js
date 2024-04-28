import React, { useState } from "react";
import styled from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import { QuestionData } from "../assets/data/questiondata";
import { useNavigate, createSearchParams } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fffacd;
  font-family: "Simkyungha";
`;

const Title = styled.div`
  font-size: 30px;
  text-align: center;
  margin-bottom: 30px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Question = () => {
  const navigate = useNavigate();
  const [questionNo, setQuestionNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);
  const handleClickButton = (no, type) => {
    const newScore = totalScore.map((mbti) =>
      mbti.id === type ? { id: mbti.id, score: mbti.score + no } : mbti
    );
    setTotalScore(newScore);
    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
      });
    }
    // if (type === "EI") {
    //   const addScore = totalScore[0].score + no;
    //   const newObject = { id: "EI", score: addScore };
    //   totalScore.splice(0, 1, newObject);
    // } else if (type === "SN") {
    //   const addScore = totalScore[1].score + no;
    //   const newObject = { id: "SN", score: addScore };
    //   totalScore.splice(1, 1, newObject);
    // } else if (type === "TF") {
    //   const addScore = totalScore[2].score + no;
    //   const newObject = { id: "TF", score: addScore };
    //   totalScore.splice(2, 1, newObject);
    // } else if (type === "JP") {
    //   const addScore = totalScore[3].score + no;
    //   const newObject = { id: "JP", score: addScore };
    //   totalScore.splice(3, 1, newObject);
    // }
  };
  return (
    <div>
      <ProgressBar
        striped
        variant="info"
        now={(questionNo / QuestionData.length) * 100}
      />
      <Wrapper>
        <div>
          <Title>{QuestionData[questionNo].title}</Title>
          <ButtonGroup>
            <Button
              onClick={() =>
                handleClickButton(1, QuestionData[questionNo].type)
              }
              variant="dark"
              style={{ width: " 400px", height: "400px", fontSize: "25px" }}
            >
              {QuestionData[questionNo].answera}
            </Button>
            <Button
              onClick={() =>
                handleClickButton(0, QuestionData[questionNo].type)
              }
              variant="dark"
              style={{ width: " 400px", height: "400px", fontSize: "25px" }}
            >
              {QuestionData[questionNo].answerb}
            </Button>
          </ButtonGroup>
        </div>
      </Wrapper>
    </div>
  );
};

export default Question;
