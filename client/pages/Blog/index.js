import React from 'react';
import Header from 'components/Header';
import BarList from 'components/BarList';


class Bars extends React.Component {

  constructor() {
    super();
    this.state = {
      bars: [],
      title: 'Getting bars near you...'
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      fetch(`https://crossorigin.me/http://api.brewerydb.com/v2/search/geo/point?lat=${position.coords.latitude}&lng=${position.coords.longitude}&radius=15&key=c0b90d19385d7dabee991e89c24ea711`, { mode: 'cors' }).then((response) => {
        return response.json();
      }).then((data) => {
        console.log(data);
        this.setState({
          bars: data.data,
          title: 'Bars Near Me'
        })
      }).catch((err) => {
        console.log(err);
      })
    });
  }

  render() {
    return (
      <section>
        <Header title={this.state.title} className="header-dark" />
        <BarList data={this.state.bars} />
      </section>
    )
  }
}

export default Bars;
