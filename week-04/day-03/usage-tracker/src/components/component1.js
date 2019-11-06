import React from 'react';
export default class Component1 extends React.Component {
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
    console.log(`com1 ummount:${Date.now()}`);
    this.endTime = Date.now();
    updateMount(`Component1`,(this.endTime-this.state.startTime)/1000);
  }

  render() {
    return <h1>Hi, I'm Component1</h1>;
  }
}