import React from "react";

const PreviewFile = ({ title, desc }) => {
  return (
    <div className="flex justify-start items-center w-[200px] font-poppins text-black-primary-app gap-3 py-1 px-3 border-2 border-grey-primary-app rounded-md ">
      <h1 className="text-xs font-light">{title} </h1>
      <h1 className="text-sm font-semibold truncate ">{desc} </h1>
    </div>
  );
};

export default PreviewFile;
