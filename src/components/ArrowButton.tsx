import React from "react";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";

type ArrowButtonProps = {
  direction: "left" | "right"; 
};

const ArrowButton: React.FC<ArrowButtonProps> = ({ direction }) => {
  return (
    <div className={`bg-blue-400 w-[60px] h-[60px] rounded-4xl shadow-xl flex items-center justify-center cursor-pointer`}>
      <img src={direction === "left" ? leftArrow : rightArrow} alt={`Arrow pointing ${direction}`} />
    </div>
  );
};

export default ArrowButton;
