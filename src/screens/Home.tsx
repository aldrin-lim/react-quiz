import { Button } from "@mui/material";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Loader from "../components/Loader";
import { useQuizContext } from "../contexts/quizContext";

const Home = () => {
  const { start, fetchQuestions, state } = useQuizContext()
  const history = useHistory();

  useEffect(() => {
    fetchQuestions();
  }, []);

  const startQuiz = () => {
    start();
    history.push('/quiz')
  }

  if (state.loaded === false) {
    return <Loader />
  }
  
  return <>
    <h1>
      Welcome to Trivia Challenge
    </h1>
    <h3>
      You will be presented with 10 True or False questions
    </h3>

    <h3>
      Can you score 100%?
    </h3>

    <Button onClick={startQuiz} variant="contained">
      Begin
    </Button>
  </>;
};

export default Home;
