import React, { useState } from "react";
import ButtonUpload from "./widgets/ButtonUpload";
import { FiUpload } from "react-icons/fi";
import Button from "./widgets/Button";

const UploadFile = () => {
  const [isRunning, setIsRunning] = useState(false);

  const handleUploadModel = () => {};
  const handleUploadData = () => {};
  const handleRunningSimulation = () => {};

  return (
    <>
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center font-poppins text-black-primary-app container mt-[32px]">
        {/* TITLE */}
        <h1 className="font-bold text-4xl">I-DetFail</h1>

        {/* UPLOAD ROW */}
        <div className="flex justify-center items-center gap-3">
          <ButtonUpload icon={<FiUpload />} title="Upload Data" />
          <ButtonUpload icon={<FiUpload />} title="Upload Model" />
          <Button title="Mulai Simulasi" />
        </div>
      </div>
    </>
  );
};

export default UploadFile;
