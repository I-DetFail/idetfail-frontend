import React from "react";

const ModalComponent = ({ onClose }) => {
  return (
    <>
      <div
        onClick={onClose}
        className="flex  justify-center items-center fixed w-full h-full font-poppins top-0 bottom-0 right-0 left-0 z-50 bg-slate-500 bg-opacity-60"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[800px] h-[600px] flex flex-col cursor-default  bg-white rounded-2xl py-4 px-8 mx-4 overflow-y-auto"
        ></div>
      </div>
    </>
  );
};

export default ModalComponent;
