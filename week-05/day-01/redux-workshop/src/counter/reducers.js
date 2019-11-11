import {
  INCREASE_ACTION,
  DECREASE_ACTION,
  INCREASE_BY_ACTION
} from "./actionCreator";

export const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREASE_ACTION:
      return state + 1;
    case INCREASE_BY_ACTION:
      return state + action.payload;
    case DECREASE_ACTION:
      return state - 1;
    default:
      return state;
  }
};
