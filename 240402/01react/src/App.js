import "./App.css";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Buttons from "./components/Buttons.js";
import Footer from "./components/Footer.js";

const ChildComp = () => {
  return <div>child component</div>;
};

function App() {
  const BodyProps = {
    name: "SSU",
    location: "서울시",
    // favorList: ["파스타", "햄버거", "떡볶이"],
  };
  return (
    <div className="App">
      <Header />
      <Body {...BodyProps} />
      <Buttons />
      <Footer>
        <ChildComp />
      </Footer>
    </div>
  );
}

export default App;
