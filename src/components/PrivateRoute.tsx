import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useQuizContext } from "../contexts/quizContext";

const PrivateRoute: React.FC<any> = ({ children }) => {
  const { state } = useQuizContext();

  if (state.hasStarted === false) {
    return <Redirect to="/" />;
  }

  return children;
};

export default PrivateRoute;
