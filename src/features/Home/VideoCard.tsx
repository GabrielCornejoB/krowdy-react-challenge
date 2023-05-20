import useGlobalStore, { Question } from "@utils/store";

interface Props {
  question: Question;
}

const VideoCard = ({ question: q }: Props) => {
  const setActiveQuestion = useGlobalStore((s) => s.setActiveQuestion);

  const handleGoToDetail = () => {
    setActiveQuestion(q);
  };
  return (
    <div className="relative flex h-80 min-w-[320px] max-w-[320px] flex-col justify-between overflow-hidden rounded-md ">
      <video
        src={q.url}
        controls={!!q.url}
        className={`aspect-[4/3] bg-slate-800 ${!q.url && "opacity-60"}`}
      ></video>
      <div
        className="flex grow cursor-pointer items-center bg-slate-300 px-4 py-2 font-medium text-slate-900 transition-colors hover:bg-slate-200"
        onClick={handleGoToDetail}
        title={q.question}
      >
        <p>
          {q.question.length < 51
            ? q.question
            : `${q.question.slice(0, 50)}...`}
        </p>
      </div>
    </div>
  );
};
export default VideoCard;
