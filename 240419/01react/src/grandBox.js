import React from "react";
import { useSelector } from "react-redux";

const grandBox = () => {
  const count = useSelector((state) => state.count);
  return <div>grandBox{count}</div>;
};

export default grandBox;
