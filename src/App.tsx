import Boards from "./entities";
import store from "./redux/store";
import Network from "./network/network";
import { Provider } from "react-redux";
import "./App.css";

import AppContainer from "./views/container/AppContainer/AppContainer";
import ErrorBoundry from "./views/components/ErrorBoundry/ErrorBoundry";
import useCaseInstance from "./usecases";
import Api from "./network/api";
console.log(Boards);
declare const API_BASE_URL: string;

function App() {
  let apiInstance = new Api("trello.com" /* API_BASE_URL */, 5000);
  useCaseInstance.apiInstance = apiInstance;
  useCaseInstance.storeInstance = store;
  /* useCaseInstance.initialize({
    api: apiInstance,
    store: store,
  }); */
  return (
    <Provider store={store}>
      <div className="App">
        <ErrorBoundry>
          <AppContainer />
        </ErrorBoundry>
      </div>
    </Provider>
  );
}

export default App;
