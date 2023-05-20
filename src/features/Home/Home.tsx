import { v4 as uuid } from "uuid";
import VideoCard from "./VideoCard";
import { useGlobalStore } from "@utils/store";

const Home = () => {
  const questions = useGlobalStore((s) => s.questions);

  const handleSubmit = () => {
    if (questions.every((q) => q.url)) {
      alert("hola");
    }
  };

  return (
    <>
      <h1 className=" text-4xl font-bold">Video Questionnaire</h1>
      <div
        className={`flex w-full flex-row gap-3 overflow-x-scroll pb-3 scrollbar scrollbar-track-transparent scrollbar-thumb-slate-300 ${
          questions.length < 5 && "justify-start min-[1330px]:justify-center"
        }`}
      >
        {questions.map((q) => (
          <VideoCard key={uuid()} question={q} />
        ))}
      </div>
      <div className="row flex w-full justify-end">
        <button
          className={`rounded-md bg-sky-600 px-4 py-2 font-bold tracking-wider text-slate-200 transition-all ${
            !questions.every((q) => q.url)
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer hover:bg-sky-700"
          }`}
          onClick={handleSubmit}
        >
          SUBMIT
        </button>
      </div>
    </>
  );
};
export default Home;
