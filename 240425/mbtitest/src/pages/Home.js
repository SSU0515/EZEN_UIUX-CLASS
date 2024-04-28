import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import catImg from "../assets/ggompang.jpeg";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
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
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 24px;
  margin-top: 40px;
`;

const LogoImage = styled.div`
  width: 350px;
  height: 350px;
  margin: 10px 0 20px;
`;

const Decs = styled.div`
  font-size: 28px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  font-size: 24px;
  padding: 10px 20px;
`;

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/question");
  };
  return (
    <div>
      <Wrapper>
        <Header>고양이 MBTI</Header>
        <Contents>
          <Title>나와 어울리는 고양이는?</Title>
          <LogoImage>
            <img
              className="rounded-circle"
              width={350}
              height={350}
              src={catImg}
              alt="catImg"
            />
          </LogoImage>
          <Decs>MBTI를 기반으로 하는 나랑 잘맞는 고양이 찾기</Decs>
          <Button onClick={() => handleClick()}>- START TEST -</Button>
        </Contents>
      </Wrapper>
    </div>
  );
};

export default Home;
