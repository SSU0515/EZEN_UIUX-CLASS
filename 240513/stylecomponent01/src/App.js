import "./App.css";
import { keyframes, styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 8px;
  background-color: ${(props) => props.theme.backgroundColor};
`;
// const Box = styled.div`
//   background: ${(props) => props.bgColor};
//   width: 100px;
//   height: 100px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Text = styled.span`
//   color: #fff;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Circle = styled(Box)`
//   border-radius: 100px;
// `;
// <Box bgColor="teal">
// <Text>HELLO</Text>
// </Box>
// <Circle bgColor="tomato" />

// const Input = styled.input.attrs({ required: true })`
//   background: tomato;
// `;

const rotationAnimation = keyframes`
0%{
  transform:rotate(0deg);
  border-radius: 0px;
}50%{
  transform:rotate(360deg);
  border-radius: 200px;
}
100%{
  transform:rotate(0deg);
  border-radius: 0px;
}
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  background: #fff;
  width: 200px;
  height: 200px;
  animation: ${rotationAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji} {
    transition: all 0.3s;
  }
  &:hover {
    font-size: 50px;
  }
  &:active {
    opacity: 0;
  }
`;

function App() {
  return (
    <Container>
      <Box>
        <Emoji>🙃</Emoji>
      </Box>
      <Emoji>🙃</Emoji>
    </Container>
  );
}

export default App;
