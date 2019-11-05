import React from 'react';
import Button from './components/button'
import TaskList from './components/taskList';
import './App.css';
export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      list:[
        {
          text: 'Feed the monkey',
          todo: 1,
        },
        {
          text: 'Buy milk',
          todo:0,
        },
        {
          text: 'Sleep 8 hours',
          todo: 1,
        },
        {
          text: 'Mentoring others',
          todo: 1,
        }
    ]
  }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log();
  }

  render() {
    return(
      <main>
        <h1 className="heading">TODOS</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <Button onClick={this.handleSubmit} text="Add"/>
        </form>
        <section>
          <TaskList items={this.state.list}/> 
        </section>
      </main>
    )
  }
}
