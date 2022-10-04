import Navbar from "../components/Navbar";
import PreviewFileSection from "../components/PreviewFileSection";
import RoundedInfo from "../components/RoundedInfo";
import UploadFile from "../components/UploadFile";
import RunningIcon from "../components/widgets/RunningIcon";
import logic_solver from "../public/logic_solver.svg";
import aktuator from "../public/aktuator.svg";
import sensor from "../public/sensor.svg";
import fail from "../public/fail.svg";
import suspend from "../public/suspend.svg";
import StatusDescription from "../components/StatusDescription";
import KeretaSimulasi from "../components/KeretaSImulasi";
import StatusSimulation from "../components/StatusSimulation";
import ResultStatus from "../components/ResultStatus";
import Button from "../components/widgets/Button";
import ModalComponent from "../components/ModalComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { checkIfNotAuthorized } from "../middlewares/authorizationPage";
import { setUserProfile } from "../redux/auth/userProfileSlice";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const descDummy =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

// VALIDATE ROUTE IN SERVER SIDE
export async function getServerSideProps(context) {
  // const result = await fetch("http://108.136.40.55/api/user/profile", {
  //   headers: {
  //     Accept: "application/json",
  //   },
  // });
  // const resultJson = await result.json();
  // if (resultJson.success === false) {
  //   return {
  //     redirect: {
  //       destination: "/login",
  //       permanent: false,
  //     },
  //   };
  // } else {
  //   return {
  //     props: {resultJson},
  //     redirect: {
  //       destination: "/",
  //       permanent: false,
  //     },
  //   };
  // }
  return {
    props: {},
  };
}

export default function Home({}) {
  const [openModal, setOpenModal] = useState(false);
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { userProfile } = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await fetch("http://108.136.40.55/api/user/profile", {
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
      },
    });
    const resultJson = await result.json();
    setUserData(resultJson);
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <Navbar />
      <h1>{JSON.stringify(userData)}</h1>
      <UploadFile />
      <PreviewFileSection />
      {/* RUNNING ICON */}
      <div className="flex justify-center items-center w-full mt-16">
        <RunningIcon isRunning={false} />
      </div>

      {/* INFO VALUE SECTION */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 container mt-[32px] w-full ">
        <div className="flex justify-center items-center gap-2 w-full">
          <RoundedInfo title="Waktu" value={0.998} />
          <RoundedInfo title="Waktu" value={0.998} />
        </div>
        <div className="flex justify-center items-center gap-2 w-full">
          <RoundedInfo title="F1 Score" value={0.9909909909} />
          <RoundedInfo title="F1 Score Testing" value={0.998} />
        </div>
      </div>
      {/*  */}

      {/* STATUS DESCRIPTION */}
      <div className="container hidden md:flex  justify-center items-center gap-2 mt-[32px] w-full">
        <StatusDescription
          photo={logic_solver.src}
          altImg="logic_solver"
          desc="Logic Solver"
        />
        <StatusDescription
          photo={aktuator.src}
          altImg="aktuator"
          desc="Aktuator"
        />
        <StatusDescription photo={sensor.src} altImg="sensor" desc="Sensor" />
        <StatusDescription
          photo={suspend.src}
          altImg="suspend"
          desc="Suspend"
        />
        <StatusDescription photo={fail.src} altImg="fail" desc="Fail" />
      </div>

      {/* KERETA SIMULAI IMAGE */}
      <KeretaSimulasi />

      {/* STATUS SIMULATION */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 w-full container mb-[60px]">
        <StatusSimulation
          title="Hasil Prediksi Mode"
          status="Suspend"
          statusDesc="suspend"
        />
        <StatusSimulation
          title="Hasil Prediksi Mode"
          status="Suspend"
          statusDesc="suspend"
        />
        <StatusSimulation
          title="Hasil Prediksi Mode"
          status="Fail"
          statusDesc="failure detection"
        />
      </div>

      {/* RESULT SECTION */}
      <ResultStatus resulTitle="Left Suspend" resulDesc={descDummy} />

      {/* BUTTON MODAL */}
      <div className="mt-[32px] mb-[100px] container">
        <Button title="Knowledge Base" handleClickButton={handleOpenModal} />
      </div>

      {/* OPEN MODAL */}
      {openModal && (
        <div className="z-50">
          <ModalComponent
            onClose={() => setOpenModal(false)}
            type="knowlegdeBase"
          />
        </div>
      )}
      <ToastContainer />
    </>
  );
}
