import {createStore, applyMiddleware} from 'redux';
import {counter} from './counter/reducers';
import thunk from "redux-thunk";
import { fetchData } from '../../place-holder/src/components/asyncAction';

export const store = createStore(counter,applyMiddleware(thunk)); 