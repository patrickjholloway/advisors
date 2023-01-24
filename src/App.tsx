import "./App.css";
import React from 'react';
import { Provider } from "react-redux";

import store from "./services/store";
import Advisors from "./Advisors";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Advisors></Advisors>
      </div>
    </Provider>
  );
}

export default App;
