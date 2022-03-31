import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import {
  defaultQuizState,
  quizReducer,
  QuizState,
} from "../reducers/quizReducer";
import { Questionnaire } from "../types/questionnaire";
import { v4 as uuidv4 } from "uuid";

export type QuizContextInterface = {
  state: QuizState;
  fetchQuestions: () => void;
  addResult: (questionId: string, isCorrect: boolean) => void;
  next: () => void;
  start: () => void;
  clear: () => void;
};

export const defaultQuizContext = {
  state: defaultQuizState,
  fetchQuestions: () => {},
  addResult: () => {},
  next: () => {},
  start: () => {},
  clear: () => {}
};

export const QuizContext =
  createContext<QuizContextInterface>(defaultQuizContext);

export const useQuizContext = () => useContext(QuizContext);

export const QuizContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, defaultQuizState);

  const fetchQuestions = () => {
    const fetchQuestions = async () => {
      const api = await axios.get<{ results: Questionnaire[] }>(
        "https://opentdb.com/api.php?amount=10&difficulty=hard"
      );
      dispatch({
        type: "fetch",
        payload: {
          data: api.data.results.map((result) => ({ ...result, id: uuidv4() })),
        },
      });
    };
    fetchQuestions();
  };

  const addResult = (questionId: string, isCorrect: boolean) => {
    dispatch({
      type: "addResult",
      payload: { data: { id: questionId, isCorrect } },
    });
  };

  const next = () => {
    dispatch({ type: "next" });
  };

  const start = () => {
    dispatch({ type: "start" });
  };

  const clear = () => {
    dispatch({ type: "clear" });
  };

  return (
    <QuizContext.Provider
      value={{
        state,
        fetchQuestions,
        addResult,
        next,
        start,
        clear
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
