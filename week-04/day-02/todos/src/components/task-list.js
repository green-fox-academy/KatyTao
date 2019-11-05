import React from "react";
import BinImg from "../img/bin.svg";
import CheckImg from "../img/check.svg";
import BinHoverImg from "../img/bin-hover.svg";
import CheckHoverImg from "../img/check-hover.svg";

export default class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.handleBinClick = this.handleBinClick.bind(this);
    this.handleBinClick = this.handleBinClick.bind(this);
  }

  handleBinClick(event) {
    event.target.src = BinHoverImg;
  }

  handleCheckClick(event) {
    event.target.src = CheckHoverImg;
  }

  render() {
    return this.props.items.map((item, index) => (
      <div className="todo-item" key={index}>
        <p>{item.text}</p>
        <div className="icon-list">
          <img
            className="bin-icon"
            onClick={this.handleBinClick}
            src={BinImg}
            alt="bin icon"
          />
          <img
            className="check-icon"
            onClick={this.handleCheckClick}
            src={CheckImg}
            alt="check icon"
          />
        </div>
      </div>
    ));
  }
}
