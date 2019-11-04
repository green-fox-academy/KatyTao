import React from 'react';
export default class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <React.Fragment>
        {this.props.items.map((item,index) => <React.Fragment key={index}><input type="checkbox" name={item.name} value={item.name} checked={item.checked}/>{item.name}<br/></React.Fragment>)}
      </React.Fragment>
    );    
  }
}

