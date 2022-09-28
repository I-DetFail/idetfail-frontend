import React from "react";

const ButtonUpload = ({ icon, title, handleClickButton }) => {
  return (
    <>
      <button
        onClick={handleClickButton}
        className="flex justify-center items-center font-poppins text-black-primary-app gap-3 py-3 px-3 border-2 border-grey-primary-app rounded-md hover:bg-slate-400 hover:bg-opacity-10"
      >
        <div>{icon}</div>
        <h1 className="text-sm font-normal">{title}</h1>
      </button>
    </>
  );
};

export default ButtonUpload;
