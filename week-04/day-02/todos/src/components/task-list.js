import React from "react";
import BinImg from "../img/bin.svg";
import CheckImg from "../img/check.svg";
import BinHoverImg from "../img/bin-hover.svg";
import CheckHoverImg from "../img/check-hover.svg";

export default function TaskList(props) {
  return(
    props.items.map((item, index) => (
    <div className="todo-item" key={index}>
      <p className={item.completed === 0?'':'uncompleted'}>{item.text}</p>
      <div className="icon-list">
        <img
          className="bin-icon"
          src={BinImg} onClick={()=>props.DeleteClick(index)}
          alt="bin icon"
        />
        <img key={index}
          className="check-icon"
          onClick={()=>props.CheckClick(index)}
          src={item.completed === 0? CheckImg : CheckHoverImg}
          alt="check icon"
        />
      </div>
    </div>
    ))
  )
}

