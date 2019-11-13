import React from 'react';
import { Provider } from "react-redux";
import { store } from "./store";
import './App.css';
import DisplayMsg from './components/messageDisplay';
import SendMessage from './components/messageSend';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <SendMessage />
      <DisplayMsg/>
    </div>
    </Provider>
  );
}

export default App;
