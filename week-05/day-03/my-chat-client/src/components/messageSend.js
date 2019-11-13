import React from 'react';
import {sendData} from '../asyncAction';
import {useDispatch} from 'react-redux';
export default function SendMessage() {
  const dispatch = useDispatch();
  const messageValue = React.createRef();
  function sendMsg(value) { 
    if(value.current !== null){
      dispatch(sendData(value.current.value));
    }
  }
  return(
    <>
    <input type="text" ref={messageValue}/>
    <button onClick={()=>{sendMsg(messageValue)}}>Submit</button>
    </>
  )
}