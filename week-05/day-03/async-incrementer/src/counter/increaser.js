import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { increaseCounter } from "./actionCreator";

export default function Increaser() {
  const counter = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Increase</h2>
      <p>{counter}</p>
      <button onClick={() => dispatch(increaseCounter())}>Increase</button>
    </>
  );
}
