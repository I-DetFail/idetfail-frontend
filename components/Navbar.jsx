import React from "react";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const handleLogout = () => {};


  return (
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
          <FiLogOut size={24} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;