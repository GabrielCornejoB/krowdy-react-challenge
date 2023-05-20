import { useEffect, useState } from "react";
import useGlobalStore from "@utils/store";
import useRecording from "./hooks/useRecording";
import { toast } from "sonner";
import { AiFillHome } from "react-icons/ai";
import { RiSave3Fill } from "react-icons/ri";

const Detail = () => {
  const [time, setTime] = useState(0);
  const {
    isRecording,
    videoRef,
    handleStartRecording,
    handleStopRecording,
    videoLink,
    handleExit,
  } = useRecording();
  const { activeQuestion, setActiveQuestion, updateQuestionUrl } =
    useGlobalStore();
  // const { nextIncomplete } = useQuestionNavigation();

  const handleGoToHome = () => {
    handleExit();
    setActiveQuestion(null);
    // toggleActivePage();
  };
  const handleRecording = () => {
    if (!isRecording) {
      if (time !== 0) setTime(0);
      handleStartRecording();
    } else {
      handleStopRecording();
    }
  };
  const handleSaveVideo = () => {
    if (activeQuestion && videoLink) {
      updateQuestionUrl(activeQuestion.id, videoLink);
      toast("Recording saved succesfully!");
    } else toast.error("Cannot save recording yet!");
  };
  // const handleNextQuestion = () => {
  //   if (nextIncomplete) setActiveQuestion(nextIncomplete);
  //   else handleGoToHome();
  // };
  useEffect(() => {
    if (time === 120) handleStopRecording();
    let interval: NodeJS.Timer;
    if (isRecording) interval = setInterval(() => setTime(time + 1), 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRecording, time]);

  return (
    <div className="flex w-full flex-col items-center gap-8">
      <div className="flex w-11/12 flex-row justify-between">
        <button
          onClick={handleGoToHome}
          className="grid cursor-pointer place-items-center text-5xl text-slate-600 transition-colors duration-300 hover:text-slate-950"
        >
          <AiFillHome />
        </button>
        <button
          onClick={handleSaveVideo}
          className="grid cursor-pointer place-items-center text-5xl text-slate-600 transition-colors duration-300 hover:text-slate-950"
        >
          <RiSave3Fill />
        </button>
      </div>
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
          onClick={handleRecording}
          className="group absolute bottom-20 left-4 grid h-14 w-14 cursor-pointer place-items-center rounded-full border-4 border-red-600"
        >
          <div
            className={`aspect-square  bg-red-600 transition-all duration-500 group-hover:h-1/2 group-hover:rounded-md ${
              isRecording ? "h-1/2 rounded-md" : "h-3/4 rounded-[19px]"
            }`}
          ></div>
        </button>
        <div className="absolute left-[36%] top-2 flex flex-row items-center gap-2 rounded-md bg-slate-500 px-2 py-1 text-white opacity-75">
          <span>{time.toString().padStart(3, "0")}s / 120s</span>
          <div
            className={`aspect-square h-5 rounded-full bg-red-600 transition-transform ${
              isRecording && "animate-pulse"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default Detail;
