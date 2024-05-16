import React from "react";
import { useParams } from "react-router-dom";

interface RouterParams {
  coinId: string;
}

const Coin = () => {
  const { coinId } = useParams<RouterParams | any>();

  return <div>Coin:{coinId}</div>;
};

export default Coin;
