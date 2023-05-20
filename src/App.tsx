import { useGlobalStore } from "./utils";
import { Detail, Home } from "./features";

function App() {
  const isHomeActive = useGlobalStore((s) => s.isHomeActive);

  return (
    <div className="flex justify-center">
      <div className="flex h-screen w-3/4 flex-col items-center justify-evenly">
        {isHomeActive ? <Home /> : <Detail />}
      </div>
    </div>
  );
}

export default App;
