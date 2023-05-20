import { useState } from "react";
import { IconContext } from "react-icons";
import { BsFillRecordFill } from "react-icons/bs";

const Detail = () => {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <>
      <div className="relative flex w-full flex-col overflow-hidden rounded-2xl">
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
      </div>
    </>
  );
};
export default Detail;
