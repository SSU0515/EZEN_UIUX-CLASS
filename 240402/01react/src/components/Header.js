import React from "react";

const Header = () => {
  const handleOnClick = () => {
    alert("버튼을 클릭하셨군요");
  };
  return (
    <header>
      <h1>Header</h1>
      <button onClick={handleOnClick}>클릭🩷</button>
    </header>
  );
};

export default Header;
