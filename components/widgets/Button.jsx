import React from "react";

const Button = ({ title, handleClickButton }) => {
  return (
    <button
      onClick={handleClickButton}
      className="flex justify-center items-center font-poppins text-white gap-3 py-3 px-5 rounded-md bg-blue-primary-app  hover:bg-opacity-90"
    >
      <h1 className="text-sm font-normal">{title}</h1>
    </button>
  );
};

export default Button;
