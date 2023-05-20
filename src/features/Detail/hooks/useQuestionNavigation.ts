import useGlobalStore from "@utils/store";

const useQuestionNavigation = () => {
  const activeQuestion = useGlobalStore((s) => s.activeQuestion);
  const questions = useGlobalStore((s) => s.questions);
  const nextIncomplete = questions.find(
    (q) => q.id !== activeQuestion?.id && !q.url
  );
  return { nextIncomplete };
};
export default useQuestionNavigation;
