import React from 'react';
import bin from '../img/bin.svg';
import check from '../img/check.svg';
export default function TaskList(props) {
  return (
      props.items.map((item,index) =>
        <div className="todo-item" key={index}>
          <p>{item.text}</p>
          <div className="icon-list">
            <img className="bin-icon" src={bin} alt="bin"/>
            <img className="check-icon" src={check} alt="check"/>
          </div>
        </div>
      )
    )
}
