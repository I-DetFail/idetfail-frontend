import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ModalComponent = ({ onClose, type, handleClickButton }) => {
  return (
    <>
      <div
        onClick={onClose}
        className="flex  justify-center items-center text-black-primary-app fixed w-full h-full font-poppins top-0 bottom-0 right-0 left-0 z-50 bg-slate-500 bg-opacity-60"
      >
        {type === "knowlegdeBase" && (
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="w-[800px] h-[600px] flex flex-col cursor-default  bg-white rounded-2xl p-4 mx-4 overflow-y-auto"
          >
            <div className="flex justify-end items-center mb-2">
              <AiOutlineCloseCircle
                size={20}
                onClick={onClose}
                className="cursor-pointer"
              />
            </div>
          </div>
        )}

        {type === "logout" && (
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="w-[800px] h-fit p-4 flex flex-col cursor-default  bg-white rounded-2xl mx-4 overflow-y-auto"
          >
            <div className="flex justify-end items-center mb-2">
              <AiOutlineCloseCircle
                size={20}
                onClick={onClose}
                className="cursor-pointer"
              />
            </div>
            <div className="my-[16px]">
              <h1 className="flex justify-center items-center ">
                Are you sure want to logout ?
              </h1>

              <div className="flex justify-center items-center gap-16 mt-8 text-sm">
                <button onClick={handleClickButton} className="flex justify-center items-center py-2 px-6  rounded-md border-2 bg-opacity-40 hover:bg-blue-primary-app hover:text-white hover:border-blue-primary-app">
                  yes, logout
                </button>
                <button
                  onClick={onClose}
                  className="flex justify-center items-center py-2 px-6  rounded-md border-2 bg-opacity-40 hover:bg-blue-primary-app hover:text-white hover:border-blue-primary-app"
                >
                  cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ModalComponent;
