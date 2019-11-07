import React from 'react';
export default function ThumbDisplay(props) {
  const singleWidth = (100 / props.imgSet.length) - 2;
  const boxstyle = {
    width: `${singleWidth}%`,
  }

  const thumbImgStyle = {
    width: `100%`,
  }

  const thumbActiveStyle ={
    marginTop: "10px",
    transitionDuration: "1.2s",
  }
  let imgBoxClass = "";
  return (props.imgSet.map((item,index) => {
  imgBoxClass = props.activeIdx === index? "img-box active" : "img-box";
    return(  
        <div key={index} className={imgBoxClass} style={boxstyle}>
          <img style={thumbImgStyle} src={item.url} alt={item.alt}/>
        </div>
  
    )
  })
 ) 
}