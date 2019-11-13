import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {messageReducer} from './messageReducer';

export const store = createStore(messageReducer,applyMiddleware(thunk));
store.subscribe(()=>{console.log(store.getState())});