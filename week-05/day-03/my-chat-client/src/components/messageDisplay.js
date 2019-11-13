import React,{ useEffect } from 'react';
import {fetchData} from '../asyncAction';
import {useDispatch, useSelector} from 'react-redux';
import MessageBox from './messageBox';

export default function DisplayMsg() {
  const dispatch = useDispatch();
  const messages = useSelector(state => state.messages);
  useEffect(()=>{
    dispatch(fetchData());
    const timerId = setInterval(() => {
      dispatch(fetchData());
    }, 60000);
    return () => clearInterval(timerId);
  },[]);
  return(
    <>
    {messages.map(value=>{return <MessageBox props={value}/>})}
    </>
  )
}