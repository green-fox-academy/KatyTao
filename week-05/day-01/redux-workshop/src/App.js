import React from 'react';
import {createStore} from 'redux';
import './App.css';
import Counter from './counter/index';
import { Provider } from 'react-redux';
import counter from './counter/reducer';

const store = createStore(counter);

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
