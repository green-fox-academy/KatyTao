import React from "react";
import Button from "./button";
import TaskList from "./task-list";
export default class Todos extends React.Component {
  constructor(props) {
    super(props);
    const { themeName } = this.props;
    this.state = {
      value: "",
      list: [
        {
          text: "Feed the monkey",
          completed: 1
        },
        {
          text: "Buy milk",
          completed: 0
        },
        {
          text: "Sleep 8 hours",
          completed: 1
        },
        {
          text: "Mentoring others",
          completed: 1
        }
      ]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const temp = { value: event.target.value };
    this.setState(temp);
  }

  handleSubmit(event) {
    let temp = [...this.state.list];
    temp.push({ text: this.state.value, completed: 0 });
    this.setState({ value: "", list: temp });
    event.preventDefault();
  }

  handleCheckClick(clickedIndex) {
    let temp = [...this.state.list];
    temp[clickedIndex].completed =
      this.state.list[clickedIndex].completed === 0 ? 1 : 0;
    this.setState(temp);
  }

  handleDelete(clickedIndex) {
    let temp = [...this.state.list];
    let tempValue = this.state.value;
    temp.splice(clickedIndex, 1);
    this.setState({ value: tempValue, list: temp });
  }
  render() {
    return (
      <>
        <h1 className='heading'>TODOS</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
          />
          <Button onClick={this.handleSubmit} text='Add' />
        </form>
        <section>
          <TaskList
            items={this.state.list}
            CheckClick={index => this.handleCheckClick(index)}
            DeleteClick={index => this.handleDelete(index)}
          />
        </section>
        {/* <a className="todo-item" href="/themes">
          Theme Switcher
        </a> */}
      </>
    );
  }
}
