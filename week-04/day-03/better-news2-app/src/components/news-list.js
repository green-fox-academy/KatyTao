import React from 'react';
export default function NewsList(props) {
  return(
    <>
      {props.items.map((item,index) =><div key={index}><h2>{item.title}</h2><p>{item.description}</p></div>)}
    </>
  )
}