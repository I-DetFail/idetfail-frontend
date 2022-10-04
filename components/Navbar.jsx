import React, { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import ModalComponent from "./ModalComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../components/Loading";
import { useRouter } from "next/router";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleLogOut = async () => {
    const result = await fetch("http://108.136.40.55/api/user/logout", {
      method: "POST",
    });

    const resultJson = await result.json();

    if (result.status === 200) {
      setIsLoading(false);
      // navigate to home
      router.push("/login");
    }
    if (resultJson.success !== true) {
      toast.error(resultJson.message, {
        position: "top-center",
      });
    }

    // console.log("resultJson :", resultJson);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loading />}
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
          <ModalComponent
            onClose={() => setOpenModal(false)}
            type="logout"
            handleClickButton={handleLogOut}
          />
        </div>
      )}

      <ToastContainer />
    </>
  );
};

export default Navbar;
