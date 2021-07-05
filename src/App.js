import MainContaner from "./components/layout/MainContainer/MainContainer.js";
import { Provider } from "react-redux";
import store from "./store";
import Quiz from "./pages/quiz/Quiz.js";
import Test from "./pages/test/Test.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Lessons from "./pages/lessons/Lessons.js";
import Topics from "./pages/lessons/Topics.js";
import Register from "./pages/user/Register.js";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./css/toastify.css";
import UserRoute from "./components/routes/UserRoute";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ToastContainer transition={Slide} />
        <Router>
          <MainContaner>
            <UserRoute exact path="/quiz/:lesson" component={Quiz} />
            <UserRoute exact path="/" component={Topics} />
            <Route exact path="/edit-name" component={Register} />
            <UserRoute exact path="/lessons" component={Topics} />
            <UserRoute exact path="/lessons/:topic" component={Lessons} />
            <UserRoute exact path="/test/:lesson" component={Test} />
          </MainContaner>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
