import useGlobalStore from "@utils/store";
import useQuestionNavigation from "./hooks/useQuestionNavigation";

const NavigationButtons = () => {
  const setActiveQuestion = useGlobalStore((s) => s.setActiveQuestion);
  const { nextIncomplete } = useQuestionNavigation();

  const handleNextQuestion = () => {
    if (nextIncomplete) setActiveQuestion(nextIncomplete);
  };

  return (
    <div className="flex w-11/12 flex-row justify-between ">
      <button className="cursor-pointer rounded-md bg-slate-500 px-4 py-2 font-bold tracking-wider text-slate-200 first-line:transition-all hover:bg-slate-700">
        Previous
      </button>
      <button
        onClick={handleNextQuestion}
        className="cursor-pointer rounded-md bg-sky-600 px-4 py-2 font-bold tracking-wider text-slate-200 first-line:transition-all hover:bg-sky-700"
      >
        {nextIncomplete ? "Next" : "Finish"}
      </button>
    </div>
  );
};
export default NavigationButtons;
