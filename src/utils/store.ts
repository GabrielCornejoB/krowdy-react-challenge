import { create } from "zustand";
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
}

const defaultQuestions: Question[] = questionList.map((q) => ({
  id: uuid(),
  question: q,
  url: "",
}));

export const useGlobalStore = create<GlobalStore>((set) => ({
  isHomeActive: true,
  questions: defaultQuestions,
  activeQuestion: null,
  toggleActivePage: () =>
    set((store) => ({ isHomeActive: !store.isHomeActive })),
  setActiveQuestion: (question: Question | null) =>
    set(() => ({ activeQuestion: question })),
}));
