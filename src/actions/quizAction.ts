import { Questionnaire } from "../types/questionnaire"

export type QuizFetchAction = {
  type: 'fetch',
  payload: {
    data: Questionnaire[]
  }
}

export type QuizAddResultAction = {
  type: 'addResult',
  payload: {
    data: {
      id: string;
      isCorrect: boolean;
    }
  }
}

export type QuizClearAction = {
  type: 'clear'
}

export type QuizNextAction = {
  type: 'next'
}


export type QuizStartAction = {
  type: 'start'
}

export type QuizAction = QuizFetchAction | QuizAddResultAction | QuizClearAction | QuizNextAction | QuizStartAction;