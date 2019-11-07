import React from 'react';

export default function SliderBtn(props){
  return(
    <section onClick={props.clickFunc} className={`btn-section ${props.className}`} >
      <button><img src="./img/icon/arrow.svg"/></button>
    </section>
  )
}