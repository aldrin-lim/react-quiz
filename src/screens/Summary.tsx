import { Box, Button, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useQuizContext } from "../contexts/quizContext";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textAlign: "center",
  },
  correct: {
    color: "#327a32",
  },
  wrong: {
    color: "#b73232",
  },
  icon: {
    display: 'inline-block',
  },
  question: {
    display: 'inline-block'
  }
}));

const Summary = () => {
  const classes = useStyles();
  const {
    state: { questions },
    clear
  } = useQuizContext();

  const correctAnswers = questions.filter((q) => q.isCorrect).length;

  return (
    <Box className={classes.root}>
      <h1>You Scored</h1>
      <h1>
        {correctAnswers} / {questions.length}
      </h1>

      {questions.map((question) => {
        return (
          <Box className={question.isCorrect ? classes.correct : classes.wrong}>
            <h5>
             {question.isCorrect ? "✔️" : "❌"} <span dangerouslySetInnerHTML={{ __html: question.question }} />
            </h5>
          </Box>
        );
      })}

      <Button onClick={() => clear()} variant="contained">Play Again?</Button>
    </Box>
  );
};

export default Summary;
