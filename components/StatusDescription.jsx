import React from "react";

const StatusDescription = ({ photo, altImg, desc }) => {
  return (
    <>
      <div className="w-full flex gap-4 justify-center items-center text-black-primary-app font-poppins py-1 px-1 bg-white border-2 rounded-lg h-[60px]">
        <img src={photo} alt={altImg} />
        <p className="text-sm font-semibold">{desc}</p>
      </div>
    </>
  );
};

export default StatusDescription;
