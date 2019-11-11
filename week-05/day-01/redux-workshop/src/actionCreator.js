export const INCREASE_ACTION = 'increase';
export const DECREASE_ACTION = 'decrease';
export function increaseCounter() {
  return {
    type:INCREASE_ACTION,
  }
}

export function decreaseCounter() {
  return {
    type:DECREASE_ACTION,
  }
}