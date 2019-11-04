import React from 'react';
export default class HotelList extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      this.props.items.map((item,index) => 
      <section key={index}>
        <h3>{item.name}</h3>
        <div className="list-detail">
          <img src={item.imageURL} alt={item.name}/>
          <article><p>{item.description}</p><button>Book Now!</button></article>
        </div>
      </section>
      ) 
    )
  }
}