import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { styled } from "styled-components";
import { ResultData } from "../assets/data/resultdata";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fffacd;
  font-family: "Simkyungha";
`;

const Header = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffa07a;
  color: #fff;
  padding: 10px 20px;
  border-radius: 50px;
  border: 2px dashed #fff;
  margin-top: 40px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 24px;
  margin-top: 20px;
`;

const LogoImage = styled.div`
  width: 350px;
  height: 350px;
  margin: 10px 0 20px;
`;

const Decs = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
  width: 600px;
  text-align: center;
`;

const Button = styled.button`
  font-size: 20px;
  padding: 10px 20px;
  margin-bottom: 20px;
`;

const Result = () => {
  const [resultData, setResultData] = useState({});
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  useEffect(() => {
    const result = ResultData.find((item) => item.best === mbti);
    setResultData(result);
  }, [mbti]);
  return (
    <div>
      <Wrapper>
        <Header>고양이 MBTI 결과</Header>
        <Contents>
          <Title>결과보기</Title>
          <LogoImage>
            <img
              className="rounded-circle"
              width={350}
              height={350}
              src={resultData.image}
              alt="catImg"
            />
          </LogoImage>
          <Decs>
            {resultData.best}인 당신과 찰떡궁합인 고양이는 <br />
            {resultData.name}🖤
            <br />
            <br />
            {resultData.desc}
          </Decs>
          <Button onClick={() => handleClick()}>- 다시 테스트하기 -</Button>
        </Contents>
      </Wrapper>
    </div>
  );
};

export default Result;
