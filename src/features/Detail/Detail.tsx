import useGlobalStore from "@utils/store";
import useRecording from "./useRecording";
import { AiFillHome } from "react-icons/ai";

const Detail = () => {
  const {
    isRecording,
    videoRef,
    handleStartRecording,
    handleStopRecording,
    videoLink,
    handleExit,
  } = useRecording();
  const { toggleActivePage, activeQuestion, setActiveQuestion } =
    useGlobalStore();

  const handleGoToHome = () => {
    handleExit();
    setActiveQuestion(null);
    toggleActivePage();
  };
  const handleRecording = () => {
    if (!isRecording) {
      handleStartRecording();
    } else {
      handleStopRecording();
    }
  };

  return (
    <div className="flex w-full flex-col items-center gap-8">
      <button
        className="flex w-11/12 cursor-pointer flex-row items-center justify-center  text-5xl text-slate-600"
        onClick={handleGoToHome}
      >
        <AiFillHome className=" transition-colors duration-300 hover:text-slate-950" />
      </button>
      <div className="relative flex w-11/12 flex-col overflow-hidden rounded-2xl">
        <div className="flex flex-row">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="aspect-[4/3] w-1/2 bg-slate-500"
          />
          <video
            src={videoLink ? videoLink : undefined}
            controls
            className="aspect-[4/3] w-1/2 bg-slate-500"
          ></video>
        </div>
        <div className="bg-slate-300 px-6 py-4 text-2xl font-semibold">
          <p>{activeQuestion?.question}</p>
        </div>
        <button
          className="group absolute bottom-20 left-4 grid h-14 w-14 cursor-pointer place-items-center rounded-full border-4 border-red-600"
          onClick={handleRecording}
        >
          <div
            className={`aspect-square  bg-red-600 transition-all duration-500 group-hover:h-1/2 group-hover:rounded-md ${
              isRecording ? "h-1/2 rounded-md" : "h-3/4 rounded-[19px]"
            }`}
          ></div>
        </button>
        <div className="absolute left-[37%] top-2 flex flex-row items-center gap-2 rounded-md bg-slate-500 px-2 py-1 text-white opacity-75">
          <span>0:00 / 2:00</span>
          <div
            className={`aspect-square h-5 rounded-full bg-red-600 transition-transform ${
              isRecording && "animate-pulse"
            }`}
          ></div>
        </div>
      </div>
      <div className="flex w-11/12 flex-row justify-between">
        <button className="cursor-pointer rounded-md bg-slate-500 px-4 py-2 font-bold tracking-wider text-slate-200 first-line:transition-all hover:bg-slate-700">
          Previous
        </button>
        <button className="cursor-pointer rounded-md bg-sky-600 px-4 py-2 font-bold tracking-wider text-slate-200 first-line:transition-all hover:bg-sky-700">
          Next
        </button>
      </div>
    </div>
  );
};
export default Detail;
