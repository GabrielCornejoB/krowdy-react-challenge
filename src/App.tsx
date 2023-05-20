import useGlobalStore from "@utils/store";
import { Detail, Home } from "./features";

function App() {
  const activeQuestion = useGlobalStore((s) => s.activeQuestionId);

  return (
    <div className="flex justify-center">
      <div className="flex h-screen w-3/4 flex-col items-center justify-evenly">
        {!activeQuestion ? <Home /> : <Detail />}
      </div>
    </div>
  );
}

export default App;
