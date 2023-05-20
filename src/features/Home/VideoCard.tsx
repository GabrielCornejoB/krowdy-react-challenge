import { IconContext } from "react-icons";
import { BsFillPlayFill } from "react-icons/bs";

const VideoCard = () => {
  return (
    <div className="relative flex h-80 min-w-[240px] max-w-[240px] flex-col justify-between overflow-hidden rounded-md ">
      <video src="" className="grow bg-slate-800"></video>
      <div className="bg-slate-300 px-4 py-2 font-medium text-slate-900">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
      <button className="absolute grid h-10 w-10 translate-x-2 translate-y-52 cursor-pointer place-items-center rounded-full bg-slate-200 text-slate-900 transition-all duration-200 hover:bg-slate-400">
        <IconContext.Provider value={{ size: "1.5rem" }}>
          <BsFillPlayFill className="text-inherit" />
        </IconContext.Provider>
      </button>
    </div>
  );
};
export default VideoCard;
