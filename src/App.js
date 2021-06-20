import MainContaner from "./components/layout/MainContainer/MainContainer.js";
import { Provider } from "react-redux";
import store from "./store";
import Quiz from "./pages/quiz/Quiz.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Lessons from "./pages/lessons/Lessons.js";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <MainContaner>
            <Route exact path="/quiz/:lesson" component={Quiz} />
            <Route exact path="/" component={Lessons} />
          </MainContaner>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
