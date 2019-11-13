import React from 'react';
import { Provider } from "react-redux";
import { store } from "./store";
import './App.css';
import AsyncIncrementer from './counter/asyncIncrease';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AsyncIncrementer />
      </div>
    </Provider>
  );
}

export default App;
