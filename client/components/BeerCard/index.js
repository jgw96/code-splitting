import React from 'react';
import './beercard.scss';

class BeerCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="beerCard">
        <h3>IBU: {this.props.ibu}</h3>
        <h3>ABV: {this.props.abv}</h3>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}

export default BeerCard;