import { Questionnaire } from "../types/questionnaire";
import { QuizAction } from "../actions/quizAction";

export type QuizState = {
  questions: Questionnaire[];
  index: number;
  loaded: boolean;
  error: any;
  hasStarted: boolean;
};

export const defaultQuizState: QuizState = {
  questions: [],
  index: 0,
  loaded: false,
  error: null,
  hasStarted: false,
};

export const quizReducer = (
  state: QuizState,
  action: QuizAction
): QuizState => {
  switch (action.type) {
    case "fetch":
      return {
        ...state,
        questions: action.payload.data,
        loaded: true,
      };
    case "addResult":
      const questions = state.questions.map((question) => {
        if (question.id === action.payload.data.id) {
          question.isCorrect = action.payload.data.isCorrect;
        }
        return question;
      });
      return {
        ...state,
        questions,
      };
    case "next": {
      return {
        ...state,
        index: state.index + 1,
      };
    }
    case "start":
      return {
        ...state,
        hasStarted: true,
      };
    case "clear":
      return defaultQuizState;
    default:
      return state;
  }
};
