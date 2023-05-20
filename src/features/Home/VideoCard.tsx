import { useState } from "react";
import { Question, useGlobalStore } from "@utils/store";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";

interface Props {
  question: Question;
}

const VideoCard = ({ question: q }: Props) => {
  const [hasVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const toggleActivePage = useGlobalStore((s) => s.toggleActivePage);
  const setActiveQuestion = useGlobalStore((s) => s.setActiveQuestion);

  const handleGoToDetail = () => {
    setActiveQuestion(q);
    toggleActivePage();
  };

  const handleIsPlaying = () => {
    if (hasVideo) setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative flex h-80 min-w-[240px] max-w-[240px] flex-col justify-between overflow-hidden rounded-md ">
      <video src="" className="grow bg-slate-800"></video>
      <div
        className="cursor-pointer bg-slate-300 px-4 py-2 font-medium text-slate-900 transition-colors hover:bg-slate-200"
        onClick={handleGoToDetail}
        title={q.question}
      >
        <p>
          {q.question.length < 51
            ? q.question
            : `${q.question.slice(0, 50)}...`}
        </p>
      </div>
      <button
        className={`absolute grid h-10 w-10 translate-x-2 translate-y-52 place-items-center rounded-full bg-slate-300 text-2xl text-slate-900 transition-all duration-200 ${
          hasVideo
            ? "cursor-pointer hover:bg-slate-200"
            : "cursor-not-allowed opacity-50"
        }`}
        onClick={handleIsPlaying}
      >
        {isPlaying ? <BsFillPauseFill /> : <BsFillPlayFill />}
      </button>
    </div>
  );
};
export default VideoCard;
