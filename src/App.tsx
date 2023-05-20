import { Home } from "./features";
import Detail from "./features/Detail/Detail";

function App() {
  return (
    <div className="flex justify-center">
      <div className="flex h-screen w-3/4 flex-col items-center justify-evenly">
        <Home />
        {/* <Detail /> */}
      </div>
    </div>
  );
}

export default App;
