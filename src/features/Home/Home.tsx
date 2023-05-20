import { v4 as uuid } from "uuid";
import { Button } from "../ui";
import VideoCard from "./VideoCard";
import { useGlobalStore } from "@utils/store";

const Home = () => {
  const questions = useGlobalStore((s) => s.questions);

  return (
    <>
      <h1 className=" text-4xl font-bold">Video Questionnaire</h1>
      <div
        className={`flex w-full flex-row gap-3 overflow-x-scroll pb-3 ${
          questions.length < 4 && "justify-center"
        }`}
      >
        {questions.map((q) => (
          <VideoCard key={uuid()} question={q} />
        ))}
      </div>
      <div className="row flex w-full justify-end">
        <Button text="SUBMIT" isMainColor />
      </div>
    </>
  );
};
export default Home;
