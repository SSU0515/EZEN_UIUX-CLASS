import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul style={{ display: "flex", gap: "10px" }}>
        <li style={{ listStyle: "none" }}>
          <Link to={"/"}>Home</Link>
        </li>
        <li style={{ listStyle: "none" }}>
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
