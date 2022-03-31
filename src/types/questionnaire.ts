export const difficulty = ['hard'] as const;
export type DifficultyTypes = typeof difficulty[number];

export type Questionnaire = {
  id: string;
  category: string;
  type: string;
  difficulty: DifficultyTypes,
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  isCorrect?: boolean;
}