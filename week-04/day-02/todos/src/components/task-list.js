import React from 'react';
import Button from './button';
import img from '../img/bin.svg';
export default class TaskList extends React.Component{
  constructor(props) {
    super(props);
    this.props = props;
    this.handleBinClick = this.handleBinClick.bind(this);
  }  

  handleBinClick(event) {
    console.log(event.target);
    event.target.style.backgroundImage = "url('./img/bin-hover.svg')";
  }
  
  render(){
    return (
      this.props.items.map((item,index) =>
        <div className="todo-item" key={index}>
          <p>{item.text}</p>
          <div className="icon-list">
            <Button class="bin-icon" onClick={this.handleBinClick}/>
            <Button class="check-icon" onClick=""/>
            <img class="bin-icon" src={img} alt=""/>
            <img class="check-icon" src={} alt=""/>
          </div>
        </div>
      )
    )
  }
  
}
