import React from 'react';
export default function MessageBox(props) {
  
  const style = props.props.style;
  return(
    <section style={style}>
      <div className="header-wrapper">
        <h5>{props.props.user}</h5>
        <span>{props.props.createdAt}</span>
      </div>
      {/* <p>{props.props.text}</p> */}
    </section>
  )
}