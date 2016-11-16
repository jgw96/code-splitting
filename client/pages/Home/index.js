import React from 'react';
import Header from 'components/Header';
import BeerList from 'components/BeerList';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      beers: [],
      value: ''
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (this.state.beers.length === 0) {
      fetch('https://crossorigin.me/http://api.brewerydb.com/v2/beers?ibu=10,100&key=c0b90d19385d7dabee991e89c24ea711', { mode: 'cors' }).then((response) => {
        return response.json();
      }).then((data) => {
        console.log(data.data);
        this.setState({
          beers: data.data
        })
      }).catch((err) => {
        console.log(err);
      })
    }

    this.refs.searchDiv.animate([
      { opacity: 0 },
      { opacity: 1 }
    ], {
      easing: 'ease-in',
      duration: 1000
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSearch() {
    fetch(`https://crossorigin.me/http://api.brewerydb.com/v2/search?q=${this.state.value}&type=beer&key=c0b90d19385d7dabee991e89c24ea711`, { mode: 'cors' }).then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({
        beers: data.data,
      })
    }).catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <section className="home">
        <Header title="Home" className="header-dark" />
        <div className="searchDiv" ref="searchDiv">
          <input type="text" placeholder="Lager" className="searchInput" value={this.state.value} onChange={this.handleChange}></input>
          <button className="doSearchButton" onClick={this.handleSearch}>SEARCH</button>
        </div>
        <BeerList data={this.state.beers}></BeerList>
      </section>
    )
  }
}

export default Home;
