import React from 'react';
import './App.css';
import Increaser from './components/increaser';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import {counterReducer} from './reducers/counterReducer';  

const store = createStore(counterReducer);

function App() {
  return (
    <Provider store={store}>
      <Increaser/>
    </Provider>
  );
}

export default App;
