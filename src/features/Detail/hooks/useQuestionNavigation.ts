import useGlobalStore from "@utils/store";

const useQuestionNavigation = () => {
  const activeQuestionId = useGlobalStore((s) => s.activeQuestionId);
  const questions = useGlobalStore((s) => s.questions);
  const nextIncomplete = questions.find(
    (q) => q.id !== activeQuestionId && !q.url
  );
  return { nextIncomplete };
};
export default useQuestionNavigation;
