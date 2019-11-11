export const INCREASE_ACTION = "increase";
export const DECREASE_ACTION = "decrease";
export const INCREASE_BY_ACTION = "increase_by";

export function increaseCounter() {
  return {
    type: INCREASE_ACTION
  };
}

export function decreaseCounter() {
  return {
    type: DECREASE_ACTION
  };
}

export function increaseCounterBy(value) {
  return {
    type: INCREASE_BY_ACTION,
    payload: value
  };
}
