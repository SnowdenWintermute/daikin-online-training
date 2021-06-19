import Sidebar from "./components/layout/Sidebar/Sidebar.js";
import InfoWindow from "./components/layout/InfoWindow/InfoWindow.js";
import MainContaner from "./components/layout/MainContainer/MainContainer.js";
import QuizPages from "./pages/display/QuizPages.js";
import { Provider } from "react-redux";
import store from "./store";
import InfoPages from "./pages/display/InfoPages.js";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainContaner>
          <Sidebar>
            <QuizPages />
          </Sidebar>
          <InfoWindow>
            <InfoPages />
          </InfoWindow>
        </MainContaner>
      </div>
    </Provider>
  );
}

export default App;
