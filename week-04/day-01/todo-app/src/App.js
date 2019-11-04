import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class TodoApp extends React.Component{
  constructor() {
    this.state = {
      todo: [
        {
          text: 'Feed the monkey',
          prio: 2
        },
        {
          text: 'Buy milk',
          prio: 1
        }
      ],
      doneTodo: [
        {
          text: 'Sleep 8 hours',
          prio: 2
        },
        {
          text: 'Mentoring others',
          prio: 1
        }
      ],
    }
  }

  doneTodo() {

  }
  
  deleteTodo() {

  }

  render() {
    return;
  }
}

