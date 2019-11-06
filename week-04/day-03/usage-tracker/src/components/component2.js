import React from 'react';
export default class Component2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime:0,
    }
  }

  componentDidMount() {
    const startTime = Date.now();
    this.setState({
      startTime:startTime,
    })
  }

  componentWillUnmount() {
    const {updateMount} = this.props;
    console.log(`com2 ummount:${Date.now()}`);
    this.endTime = Date.now();
    updateMount(`Component2`,(this.endTime-this.state.startTime)/1000);
  }

  render() {
    return <h1>Hi, I'm Component2</h1>;
  }
}