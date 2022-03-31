import { Card } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Redirect } from "react-router-dom";
import { useQuizContext } from "../../contexts/quizContext";
import Summary from "../Summary";
import Answer from "./Answer";

const useStyles = makeStyles(() => ({
  cardContainer: {
    height: "300px",
  },
  card: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1em",
  },
}));

const Quiz: React.FC = () => {
  const {
    state: { questions, index },
  } = useQuizContext();

  const classes = useStyles();
  const question = questions[index];

  if (!question) {
    return <Redirect to="/summary" />
  }

  return (
    <>
      <h2>{question.category}</h2>

      <Box className={classes.cardContainer} py={2}>
        <Card className={classes.card} variant="outlined">
          <h5 dangerouslySetInnerHTML={{ __html: question.question }} />
        </Card>
      </Box>
      <Box py={2}>
        <p>{index + 1} of 10</p>
      </Box>

      <Answer />
    </>
  );
};

export default Quiz;
