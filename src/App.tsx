import VideoCard from "./components/VideoCard";

function App() {
  const arr = [1, 1, 1, 1, 1, 1];

  return (
    <div className="flex justify-center ">
      <div className="flex h-screen w-3/4 flex-col items-center justify-evenly ">
        <h1 className=" text-4xl font-bold">Video Questionnaire</h1>
        <div
          className={`flex w-full flex-row gap-3 overflow-x-scroll pb-3 ${
            arr.length < 4 && "justify-center"
          }`}
        >
          {arr.map((a, index) => (
            <VideoCard key={index} />
          ))}
        </div>
        <div className="row flex w-full justify-end">
          <button className="cursor-pointer rounded-md bg-sky-600 px-4 py-2 font-bold tracking-wider text-slate-200 transition-all hover:bg-sky-700">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
