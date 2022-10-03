import React, { useState, useEffect } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Loading from "../components/Loading";
import bgKereta from "../public/kereta_cover.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { setIsLogin, setDataUser } from "../redux/auth/authSlice";
import { useRouter } from "next/router";
import { checkIfAlreadyAuthorized } from "../middlewares/authorizationPage";

// VALIDATE ROUTE IN SERVER SIDE
export async function getServerSideProps(context) {
  await checkIfAlreadyAuthorized(context);

  return {
    props: {}, // will be passed to the page component as props
  };
}

const register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const doSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("password", password);

    const result = await fetch("http://108.136.40.55/api/user/register", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    const resultJson = await result.json();

    if (result.status === 201) {
      setIsLoading(false);
      toast.success(`${resultJson.message}. Please go to login`, {
        position: "top-center",
      });
      router.push("/login");
    }

    if (resultJson.error) {
      toast.error(resultJson.error, {
        position: "top-center",
      });
      dispatch(setIsLogin(false));
      dispatch(setDataUser({}));
    }

    console.log("resultJson :", resultJson);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className="w-full flex  justify-center items-center h-screen font-poppins text-black-primary-app">
        {/* LOGIN SCREEN */}
        <div className="flex flex-col px-12 justify-center items-center md:w-2/5  w-full  h-screen">
          {/* LOGO */}
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="w-[100px] h-[100px] bg-gray-300 rounded-xl"></div>
            <h1 className="font-semibold text-2xl">I-DetFail</h1>
          </div>

          <h1 className="flex justify-center items-center mt-10 mb-8 font-semibold text-2xl">
            Register
          </h1>

          {/* LOGIN FORM */}
          <form className=" w-full" onSubmit={doSignUp}>
            {/* NAME */}
            <div className="">
              <label
                htmlFor="name"
                className="text-sm text-dark-prymary-Beacon font-normal"
              >
                Name
              </label>
              <input
                className="mt-1  rounded-md border-grey-primary-app border-2 w-full py-2 px-3 text-darkBlue-primary-Beacon leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* EMAIL */}
            <div className="mt-3">
              <label
                htmlFor="email"
                className="text-sm text-dark-prymary-Beacon font-normal"
              >
                Email
              </label>
              <input
                className="mt-1  rounded-md border-grey-primary-app border-2 w-full py-2 px-3 text-darkBlue-primary-Beacon leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* PASWORD */}
            <div className="mt-3">
              <label
                htmlFor="password"
                className="text-sm text-dark-prymary-Beacon font-normal"
              >
                Password
              </label>
              <div className="relative">
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute flex text-dark-prymary-Beacon items-center mr-2 right-0 inset-y-0 mt-1 cursor-pointer"
                >
                  {showPassword ? (
                    <AiFillEyeInvisible size={20} />
                  ) : (
                    <AiFillEye size={20} />
                  )}
                </div>
                <input
                  className="mt-1 rounded-md border-grey-primary-app border-2 w-full py-2 px-3 text-dark-prymary-Beacon leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* REPEAT PASWORD */}
            <div className="mt-3">
              <label
                htmlFor="password"
                className="text-sm text-dark-prymary-Beacon font-normal"
              >
                Repeat Password
              </label>
              <div className="relative">
                <div
                  onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                  className="absolute flex text-dark-prymary-Beacon items-center mr-2 right-0 inset-y-0 mt-1 cursor-pointer"
                >
                  {showRepeatPassword ? (
                    <AiFillEyeInvisible size={20} />
                  ) : (
                    <AiFillEye size={20} />
                  )}
                </div>
                <input
                  className="mt-1 rounded-md border-grey-primary-app border-2 w-full py-2 px-3 text-dark-prymary-Beacon leading-tight focus:outline-none focus:shadow-outline"
                  id="repeatPassword"
                  type={showRepeatPassword ? "text" : "password"}
                  placeholder="Repeat your password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
              </div>
            </div>

            {/* Button */}
            <button
              disabled={
                !!(
                  email === "" ||
                  password === "" ||
                  name === "" ||
                  password !== repeatPassword
                )
              }
              className={`${
                email === "" ||
                password === "" ||
                name === "" ||
                password !== repeatPassword
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-primary-app"
              }  drop-shadow-md w-full mt-[24px] rounded-md py-2 hover:bg-opacity-90 ease-in-out duration-100 text-white font-normal text-base focus:outline-none focus:shadow-outline`}
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* BG KERETA */}
        <div className="flex-col  relative justify-center items-center w-3/5  h-screen hidden md:block  ">
          <div className="flex justify-center items-center gap-2 absolute z-20 left-0 right-0 ml-auto mr-auto top-0 bottom-0">
            <div className="w-[50px] h-[50px] bg-gray-300 rounded-xl"></div>
            <h1 className="font-semibold text-2xl text-white">I-DetFail</h1>
          </div>

          <div className="w-full bg-black h-screen rounded-l-3xl z-10 opacity-60 absolute"></div>

          <img
            src={bgKereta.src}
            alt="bgKereta"
            className="object-cover absolute bg-cover h-screen rounded-l-3xl z-0"
          />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default register;
