import VideoCard from "./VideoCard";
import { v4 as uuid } from "uuid";

const Home = () => {
  const arr = [1, 1, 1, 1, 1, 1];

  return (
    <>
      <h1 className=" text-4xl font-bold">Video Questionnaire</h1>
      <div
        className={`flex w-full flex-row gap-3 overflow-x-scroll pb-3 ${
          arr.length < 4 && "justify-center"
        }`}
      >
        {arr.map(() => (
          <VideoCard key={uuid()} />
        ))}
      </div>
      <div className="row flex w-full justify-end">
        <button className="cursor-pointer rounded-md bg-sky-600 px-4 py-2 font-bold tracking-wider text-slate-200 transition-all hover:bg-sky-700">
          SUBMIT
        </button>
      </div>
    </>
  );
};
export default Home;
