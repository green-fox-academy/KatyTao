import React from "react";
import "./App.css";
import Increaser from "./counter/increaser";
import { Provider } from "react-redux";
import { store } from "./store";
import Decreaser from "./counter/decreaser";

function App() {
  return (
    <Provider store={store}>
      <Increaser />
      <Decreaser />
    </Provider>
  );
}

export default App;
