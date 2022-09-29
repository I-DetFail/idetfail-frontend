import React from "react";

const ResultStatus = ({ resulTitle, resulDesc }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-start w-full container gap-4 font-poppins text-black-primary-app mt-[32px]">
        {/* STATUS HASIL */}
        <h1 className="flex justify-start items-center font-semibold text-2xl ">
          {resulTitle}
        </h1>

        {/* BOX DESC */}
        <div className="w-full h-[300px] border-2 border-grey-primary-app rounded-xl p-6 overflow-y-auto">
          <h1 className="text-base font-normal">{resulDesc}</h1>
        </div>
      </div>
    </>
  );
};

export default ResultStatus;
