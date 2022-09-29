import React from "react";

const RoundedInfo = ({ title, value }) => {
  return (
    <>
      <div className="w-full flex flex-col items-start justify-center py-3 px-3 border-2 gap-1 border-grey-primary-app rounded-lg font-poppins text-black-primary-app">
        <h1 className="text-sm font-light">{title}</h1>
        <h1 className="text-xl font-semibold truncate text-ellipsis overflow-hidden">
          {value}
        </h1>
      </div>
    </>
  );
};

export default RoundedInfo;
