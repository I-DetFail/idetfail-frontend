import React from "react";
import PreviewFile from "./widgets/PreviewFile";

const PreviewFileSection = () => {
  return (
    <>
      <div className="flex flex-row justify-start items-center font-poppins text-black-primary-app container mt-[16px] md:mt-[32px] gap-4">
        <PreviewFile title="data" desc="dksvklsdslvsldvsvdssssdvdvsd.csv" />
        <PreviewFile title="model" desc="dksvklsdslvsl.csv" />
      </div>
    </>
  );
};

export default PreviewFileSection;
