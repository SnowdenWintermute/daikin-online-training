import MainContaner from "./components/layout/MainContainer/MainContainer.js";
import { Provider } from "react-redux";
import store from "./store";
import Quiz from "./pages/quiz/Quiz.js";
import Test from "./pages/test/Test.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Lessons from "./pages/lessons/Lessons.js";
import Topics from "./pages/lessons/Topics.js";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <MainContaner>
            <Route exact path="/quiz/:lesson" component={Quiz} />
            <Route exact path="/" component={Topics} />
            <Route exact path="/lessons/:topic" component={Lessons} />
            <Route exact path="/test/:lesson" component={Test} />
          </MainContaner>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
