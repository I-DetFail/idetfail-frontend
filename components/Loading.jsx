import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <>
      <div className="flex justify-center fixed top-0 bottom-0 right-0 left-0 items-center font-poppins w-full h-screen bg-gray-400 bg-opacity-80 z-[100] cursor-not-allowed">
        <ReactLoading type="spin" color="#4D77FF" />
      </div>
    </>
  );
};

export default Loading;
