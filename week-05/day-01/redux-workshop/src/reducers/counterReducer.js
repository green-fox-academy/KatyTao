import { INCREASE_ACTION } from '../actionCreator';
import { DECREASE_ACTION } from '../actionCreator';

const initState = {
  counter:0,
  tags:[],
}

export const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREASE_ACTION:
      return state + 1;
    case DECREASE_ACTION:
      return state - 1;
    default:
      return state;
  }
}