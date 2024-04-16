import React from "react";
import "./Emotion.css";

function EmotionItem({ id, img, name, onClick, isSelected }) {
  const handleOnClick = () => {
    onClick(id);
  };
  return <div className="EmotionItem"></div>;
}

export default EmotionItem;
