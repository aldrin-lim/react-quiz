import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useQuizContext } from "../../contexts/quizContext";
import { v4 as uuidv4 } from "uuid";

const BooleanAnswers = () => {
  const {
    state: { questions, index },
    addResult,
    next
  } = useQuizContext();

  const question = questions[index];

  const choices = [question.correct_answer, ...question.incorrect_answers]
    .sort()
    .reverse();

  const onChoiceClick = (value: string) => {
    addResult(question.id , value === question.correct_answer)
    next()
  };

  return (
    <>
      {choices.map((choice) => {
        return (
          <Box key={uuidv4()} py={1}>
            <Button
              onClick={() => onChoiceClick(choice)}
              fullWidth
              variant="contained"
            >
              { choice }
            </Button>
          </Box>
        );
      })}
    </>
  );
};

export default BooleanAnswers;
