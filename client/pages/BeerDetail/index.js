import React from 'react';
import Header from 'components/Header';
import BeerCard from 'components/BeerCard';

class BeerDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Getting beer...',
      description: `
      Pop-up before they sold out plaid, selvage ethical ugh banh mi. Sartorial coloring book pour-over,
      literally deep v kale chips PBR&B. Ugh hashtag chambray, hot chicken hella synth try-hard VHS cred gentrify pinterest.
      Blue bottle dreamcatcher selfies, gastropub retro asymmetrical mumblecore. Chia brunch fam vape banjo,
      cardigan vice health goth ramps organic marfa. Quinoa gentrify +1 keffiyeh pitchfork, actually bushwick marfa
      meditation narwhal subway tile. Ethical listicle leggings mixtape.
      `,
      ibu: '',
      abv: ''
    }
  }

  componentDidMount() {
    fetch(`https://crossorigin.me/http://api.brewerydb.com/v2/beer/${this.props.params.id}?key=c0b90d19385d7dabee991e89c24ea711`, { mode: 'cors' }).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data.data);
      this.setState({
        name: data.data.name,
        description: data.data.description,
        ibu: data.data.ibu,
        abv: data.data.abv
      })
    }).catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <section>
        <Header title={this.state.name} className="header-dark" />
        <BeerCard desc={this.state.description} ibu={this.state.ibu} abv={this.state.abv}></BeerCard>
      </section>
    )
  }
}

export default BeerDetail;