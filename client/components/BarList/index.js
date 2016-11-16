import React from 'react';
import './barlist.scss';

class BarList extends React.Component {

  componentWillReceiveProps() {
    this.refs.barList.animate([
      { opacity: 0 },
      { opacity: 1 }
    ], {
        duration: 700,
        easing: 'ease-in'
      });
  }

  render() {
    const bars = this.props.data.map((bar) => {
      if (bar.brewery.description && bar.phone) {
        const phoneNumber = `tel:+${bar.phone}`;
        return (
          <li className="card" key={bar.breweryId}>
            <img src={bar.brewery.images.icon} alt={bar.brewery.name} />
            <h2>{bar.brewery.name}</h2>
            <h4>Address: {bar.streetAddress}</h4>
            <p>
              {bar.brewery.description}
            </p>
            <a className="callLink" href={phoneNumber}>Call</a>
          </li>
        )
      }
    });
    return (
      <ul ref="barList" className="BarList">
        {bars}
      </ul>
    );
  }
}

export default BarList;