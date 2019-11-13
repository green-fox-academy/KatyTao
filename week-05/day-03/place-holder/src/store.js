import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {fetchReducer} from './components/reducers';

export const store = createStore(fetchReducer,applyMiddleware(thunk));
store.subscribe(()=>{console.log(store.getState())});