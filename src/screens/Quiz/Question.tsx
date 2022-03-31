import { Card } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
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
  },
}));

const Question = () => {
  const classes = useStyles();
  return (
    <>
      <h2>Entertainment: Video Games</h2>

      <Box className={classes.cardContainer} py={2}>
        <Card className={classes.card} variant="outlined">
          <h5>asdas</h5>
        </Card>
      </Box>
      <Box>
        <p>1 of 10</p>
      </Box>

      <Answer />
    </>
  );
};

export default Question;
