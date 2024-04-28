import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const goToHomepage = () => {
    navigate("/");
  };
  return (
    <div>
      <div>About Page</div>
      <button onClick={goToHomepage}> Go to Home page</button>
    </div>
  );
};

export default About;
