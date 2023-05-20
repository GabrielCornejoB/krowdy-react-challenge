import { useState } from "react";
import { Button } from "../ui";
import { AiFillHome } from "react-icons/ai";

const Detail = () => {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <div className="flex w-full flex-col items-center gap-8">
      <button className="flex w-11/12 cursor-pointer flex-row justify-center text-5xl text-slate-600">
        <AiFillHome className="rounded-full border-4 border-slate-600 p-1 transition-colors duration-300 hover:border-slate-950 hover:text-slate-950" />
      </button>
      <div className="relative flex w-11/12 flex-col overflow-hidden rounded-2xl">
        <video src="" className="aspect-video bg-slate-500" />
        <div className="bg-slate-300 px-6 py-4 text-2xl font-semibold">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit expedita officiis porro dolorum quo eos culpa odio
            velit voluptas in.
          </p>
        </div>
        <button
          className="group absolute bottom-28 left-4 grid h-14 w-14 cursor-pointer place-items-center rounded-full border-4 border-white"
          onClick={() => setIsRecording(!isRecording)}
        >
          <div
            className={`aspect-square  bg-red-600 transition-all duration-500 group-hover:h-1/2 group-hover:rounded-md ${
              isRecording ? "h-1/2 rounded-md" : "h-3/4 rounded-[19px]"
            }`}
          ></div>
        </button>
        <div className="absolute right-6 top-4 flex flex-row items-center gap-2">
          <span>0:00 / 2:00</span>
          <div
            className={`aspect-square h-5 rounded-full bg-red-600 transition-transform ${
              isRecording && "animate-pulse"
            }`}
          ></div>
        </div>
      </div>
      <div className="flex w-11/12 flex-row justify-between">
        <Button text="Previous" isMainColor={false} />
        <Button text="Next" isMainColor />
      </div>
    </div>
  );
};
export default Detail;
