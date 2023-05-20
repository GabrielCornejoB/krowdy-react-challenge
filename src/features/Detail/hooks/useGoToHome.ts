import useGlobalStore from "@utils/store";
import useRecording from "./useRecording";

const useGoToHome = () => {
  const { handleExit } = useRecording();
  const setActiveQuestion = useGlobalStore((s) => s.setActiveQuestion);

  handleExit();
  setActiveQuestion(null);
};
