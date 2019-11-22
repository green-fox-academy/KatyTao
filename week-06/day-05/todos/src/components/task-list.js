import React from "react";
import BinImg from "../img/bin.svg";
import CheckImg from "../img/check.svg";
import BinHoverImg from "../img/bin-hover.svg";
import CheckHoverImg from "../img/check-hover.svg";

export default function TaskList(props) {
  return props.items.map((item, index) => (
    <div className='todo-item' key={index}>
      <p className={item.done === false ? "" : "uncompleted"}>{item.text}</p>
      <div className='icon-list'>
        <img
          className='bin-icon'
          src={BinImg}
          onClick={() => props.DeleteClick(item.id)}
          alt='bin icon'
        />
        <img
          key={index}
          className='check-icon'
          onClick={() => props.CheckClick(item.id)}
          src={item.done === false ? CheckImg : CheckHoverImg}
          alt='check icon'
        />
      </div>
    </div>
  ));
}
