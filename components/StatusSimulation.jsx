import React from "react";

const StatusSimulation = ({ title, status, statusDesc }) => {
  return (
    <>
      <div className="w-full flex flex-col items-start justify-center py-3 px-3 border-2 gap-1 border-grey-primary-app rounded-lg font-poppins text-black-primary-app">
        <h1 className="text-sm font-light">{title}</h1>
        <div className="flex justify-between items-center w-full">
          <h1 className="text-xl font-semibold truncate text-ellipsis overflow-hidden">
            {status}
          </h1>
          <h1
            className={`text-sm font-medium ${
              status === "Suspend" ? "text-green-400" : "text-red-400"
            }`}
          >
            {status === "suspend" ? `+ ${statusDesc}` : `- ${statusDesc}`}
          </h1>
        </div>
      </div>
    </>
  );
};

export default StatusSimulation;
