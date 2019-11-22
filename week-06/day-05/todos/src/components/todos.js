import React from "react";
import Button from "./button";
import TaskList from "./task-list";
export default class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      list: [],
      serverState: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getData = this.getData.bind(this);
    this.postData = this.postData.bind(this);
    this.putData = this.putData.bind(this);
    this.deleteData = this.deleteData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const URL = "https://todos-app-123.herokuapp.com/api/todos";
    fetch(URL)
      .then(response => {
        return response.json();
      })
      .then(response =>
        this.setState({
          ...this.state,
          list: response,
          serverState: response.status
        })
      )
      .catch(error => console.log(error));
  }

  postData(data) {
    let temp = this.state.list;
    const URL = "https://todos-app-123.herokuapp.com/api/todos";
    fetch(URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        this.setState({
          ...this.state,
          serverState: response.status
        });
        return response.json();
      })
      .then(response => {
        if (response === "Missing text") {
          alert(response);
        } else {
          temp.push(response);
          this.setState({ ...this.state, list: temp });
        }
      });
  }

  putData(id) {
    const URL = `https://todos-app-123.herokuapp.com/api/todos/${id}`;
    fetch(URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        this.setState({
          ...this.state,
          serverState: response.status
        });
        return response.json();
      })
      .then(response => {
        let temp = this.state.list;
        const index = temp.findIndex(item => item.id === response.id);
        temp[index].done = response.done;
        this.setState({ ...this.state, list: temp });
      });
  }

  deleteData(id) {
    const URL = `https://todos-app-123.herokuapp.com/api/todos/${id}`;
    fetch(URL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        this.setState({
          ...this.state,
          serverState: response.status
        });
        return response.json();
      })
      .then(response => {
        let temp = this.state.list;
        const index = temp.findIndex(item => item.id === response.id);
        temp.splice(index, 1);
        this.setState({ ...this.state, list: temp });
      });
  }

  handleChange(event) {
    const temp = { value: event.target.value };
    this.setState(temp);
  }

  handleSubmit(event) {
    this.postData({ text: this.state.value });
    this.setState({ ...this.state, value: "" });
    event.preventDefault();
  }

  handleCheckClick(clickedId) {
    let temp = [...this.state.list];
    const index = this.state.list.findIndex(
      item => item.id === parseInt(clickedId)
    );
    temp[index].done = this.state.list[index].done === false ? true : false;
    this.setState({ ...this.state, list: temp });
    this.putData(clickedId);
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
            DeleteClick={index => this.deleteData(index)}
          />
        </section>
      </>
    );
  }
}
