import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCounter } from "./actionCreator";

export default function Decreaser() {
  const counter = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Decrease</h2>
      <p>{counter}</p>
      <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
    </>
  );
}
