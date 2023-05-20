import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { v4 as uuid } from "uuid";
import questionList from "./questions";

export interface Question {
  id: string;
  question: string;
  url: string;
}

interface GlobalStore {
  isHomeActive: boolean;
  questions: Question[];
  activeQuestion: Question | null;
  toggleActivePage: () => void;
  setActiveQuestion: (question: Question | null) => void;
  updateQuestionUrl: (id: string, url: string) => void;
}

const defaultQuestions: Question[] = questionList.map((q) => ({
  id: uuid(),
  question: q,
  url: "",
}));

const useGlobalStore = create<GlobalStore>((set) => ({
  isHomeActive: true,
  questions: defaultQuestions,
  activeQuestion: null,
  toggleActivePage: () =>
    set((store) => ({ isHomeActive: !store.isHomeActive })),
  setActiveQuestion: (question: Question | null) =>
    set(() => ({ activeQuestion: question })),
  updateQuestionUrl: (id: string, url: string) =>
    set((store) => ({
      questions: store.questions.map((q) =>
        q.id == id ? { ...q, url: url } : q
      ),
    })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Global Store", useGlobalStore);

export default useGlobalStore;
