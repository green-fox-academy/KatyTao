import React from 'react';
export default function ThumbDisplay(props) {
  const singleWidth = (100 / props.imgSet.length) - 2;
  const boxstyle = {
    width: `${singleWidth}%`,
  }

  const thumbImgStyle = {
    width: `100%`,
  }

  let imgBoxClass = "";
  return (props.imgSet.map((item,index) => {
  imgBoxClass = props.activeIdx === index? "img-box active" : "img-box";
    return(  
        <div key={index} onClick={() => props.clickFunc(index)} className={imgBoxClass} style={boxstyle}>
          <img style={thumbImgStyle} src={item.url} alt={item.alt}/>
        </div>
    )
  })
 ) 
}