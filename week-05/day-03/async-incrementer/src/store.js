import {createStore, applyMiddleware} from 'redux';
import {counter} from './counter/reducers';
import thunk from "redux-thunk";

export const store = createStore(counter,applyMiddleware(thunk)); 