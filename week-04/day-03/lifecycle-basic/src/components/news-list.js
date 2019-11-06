import React from 'react';

export default class NewsList extends React.Component {
  constructor(props){
    super();
    this.props = props;
  }
  render() {
    return(
      <>
        {this.props.items.map((item,index) =><div key={index}><h2>{item.title}</h2><p>{item.description}</p></div>)}
      </>
    )
  }
}