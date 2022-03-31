import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./screens/Home";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import Quiz from "./screens/Quiz/Quiz";
import PrivateRoute from "./components/PrivateRoute";
import Summary from "./screens/Summary";

function App() {

  return (
    <div className="App">
      <Router>
        <Container maxWidth="sm">
          <Box p={4}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/quiz">
                <PrivateRoute>
                  <Quiz/>
                </PrivateRoute>
              </Route>
              <Route exact path="/summary">
                <PrivateRoute>
                  <Summary />
                </PrivateRoute>
              </Route>
            </Switch>
          </Box>
        </Container>
      </Router>
    </div>
  );
}

export default App;
