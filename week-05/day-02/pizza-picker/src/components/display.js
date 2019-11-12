import React from 'react';
export default function Display(props) {
  const newObj = props.props;
  let toppings = [];
  for(let key in newObj){
    if(newObj[key] === true){
      toppings.push(key);
    }
  }
  
  return(
    <section className="display-result">
    <h4>Your pizza is on the way!</h4>
    <p>Base: {props.props.Base}</p>
    <p>Toppings: {toppings.map(item => {return <span>{item},</span>})}</p>
  <p>Cut:{props.props.Cut}</p>
  <p>Comments:{props.props.Comments}</p>
    </section>
  )
}