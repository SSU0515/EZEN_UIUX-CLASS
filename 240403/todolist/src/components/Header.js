import React from "react";
import "./Header.css";

const Header = () => {
  console.log("Header");
  return (
    <div className="Header">
      <h3 style={{ color: " #333" }}>오늘은 📅</h3>
      <h1 style={{ color: " #ffa2a2" }}>{new Date().toDateString()}</h1>
    </div>
  );
};

export default React.memo(Header);
