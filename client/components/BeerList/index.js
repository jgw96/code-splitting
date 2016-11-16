import React from 'react';
import { Link } from 'react-router/es6';
import './beerlist.scss';

class BeerList extends React.Component {

  componentWillReceiveProps() {
    this.refs.beerList.animate([
      { opacity: 0 },
      { opacity: 1 }
    ], {
      duration: 700,
      easing: 'ease-in'
    });
  }

  render() {
    const beers = this.props.data.map((beer) => {
      if (beer.description !== undefined) {
        const link = `/${beer.id}`;
        return (
          <Link to={link} key={beer.id}>
            <li className="card">
              <h2>{beer.name}</h2>
              <p>
                {beer.description}
              </p>
              <button className="visitButton">More Info</button>
            </li>
          </Link>
        )
      };
    });
    return (
      <ul ref="beerList" className="BeerList">
        {beers}
      </ul>
    );
  }
}

export default BeerList;