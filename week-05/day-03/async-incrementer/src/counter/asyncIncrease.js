import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {increaseWithDelay} from './actionCreator';

export default function AsyncIncrementer() {
  const counter = useSelector(state => state);
  const dispatch = useDispatch();
  const increasePayload=React.createRef();
  const delayPayload=React.createRef();
  const collectPayload = () => {
    dispatch(increaseWithDelay(Number(increasePayload.current.value), delayPayload.current.value));
  }
  return(
    <>
      <label>Increase Payload</label>
      <input ref={increasePayload} type="text" name="increasePayload"/>
      <label>Delay Payload</label>
      <input ref={delayPayload} type="text" name="delayPayload"/>
      <p>{counter}</p>
      <button onClick={collectPayload}>Increase</button>
    </>

  )

}