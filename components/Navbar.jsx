import React, { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import ModalComponent from "./ModalComponent";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
  const handleLogout = () => {};

  return (
    <>
      <div className="font-poppins h-[80px] w-full  flex justify-center text-black-primary-app">
        <div className="container flex justify-between items-center">
          {/* TITLE APP */}
          <div className="flex justify-center items-center gap-2">
            <div className="w-[40px] h-[40px] bg-gray-300 rounded-lg"></div>
            <h1 className="font-semibold">I-DetFail</h1>
          </div>

          {/* AKUN DAN LOGOUT */}
          <div className="flex justify-center items-center gap-4">
            <h1 className="font-normal text-sm hidden md:block">
              Nama Akun nama orang nama email
            </h1>
            <FiLogOut
              onClick={handleOpenModal}
              size={24}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* OPEN MODAL */}
      {openModal && (
        <div className="z-50">
          <ModalComponent onClose={() => setOpenModal(false)} type="logout" />
        </div>
      )}
    </>
  );
};

export default Navbar;
