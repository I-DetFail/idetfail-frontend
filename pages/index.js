import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import PreviewFileSection from "../components/PreviewFileSection";
import UploadFile from "../components/UploadFile";
import RunningIcon from "../components/widgets/RunningIcon";

export default function Home() {
  return (
    <>
      <Navbar />
      <UploadFile />
      <PreviewFileSection />
      {/* RUNNING ICON */}
      <div className="flex justify-center items-center w-full mt-16">
        <RunningIcon isRunning={false}/>
      </div>
    </>
  );
}
