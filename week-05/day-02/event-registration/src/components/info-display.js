import React from 'react';
export default function InfoDisplay(props) {
  return(
    <>
    <h2>
      Your name:
    </h2>
  <p>{props.info.firstName} {props.info.lastName}</p>
    <h2>Email:</h2>
    <p>{props.info.email}</p>
    </>
  )
  
}