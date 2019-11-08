import React from 'react';
import '../App.css';

export default function SliderDisplay(props) {
  return(
    <React.Fragment>
      <div className="slider-container">
        <img src={props.img.url} alt={props.img.alt}/>
        <div className="slider-banner">
          <h2>{props.img.alt}</h2>
          <p>{props.img.description}</p>
        </div>
      </div>
    </React.Fragment>
  )
}