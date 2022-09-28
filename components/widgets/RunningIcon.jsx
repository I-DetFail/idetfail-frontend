import React from "react";
import { FaRunning } from "react-icons/fa";

const RunningIcon = ({ isRunning }) => {
  return (
    <div className="flex justify-center items-center ">
      <div
        className={`w-fit h-fit px-4 py-2 border rounded-2xl flex justify-center items-center gap-4 ${
          isRunning
            ? "text-blue-primary-app border-blue-primary-app"
            : "text-grey-primary-app"
        }`}
      >
        <FaRunning size={32} />
        <h1>{isRunning ? "Running..." : "Stoping"}</h1>
      </div>
    </div>
  );
};

export default RunningIcon;
