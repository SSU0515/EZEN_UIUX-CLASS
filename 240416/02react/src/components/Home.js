import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const goProductPage = () => {
    navigate("/product?q");
  };
  return (
    <div className="homepage">
      <div>Home Page</div>
      <Link to="/about"> Go to about page</Link>
      <button onClick={goProductPage}>Go to product page</button>
    </div>
  );
};

export default Home;
