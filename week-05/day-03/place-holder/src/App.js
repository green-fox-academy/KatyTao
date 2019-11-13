import React from 'react';
import { Provider } from "react-redux";
import { store } from "./store";
import './App.css';
import PlaceHolder from './components/placeHolder';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PlaceHolder />
      </div>
    </Provider>
  );
}

export default App;
