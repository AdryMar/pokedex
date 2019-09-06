import React, {Component} from 'react';
import PokeList from './PokeList';
import DetailView from './DetailView';
import Pokemon from '../Pokemon';
import './styles/App.css';
import backgroundImage from './pokedex-realistic.jpg';
class App extends Component {
  constructor () {
    super ();
    this.state = {
      pokemon: {},
    };

    this.handleOnClick = this.handleOnClick.bind (this);
  }

  handleOnClick (id) {
    fetch (`http://pokeapi.co/api/v2/pokemon/${id}/`)
      .then (res => res.json ())
      .then (data => {
        const pokemon = new Pokemon (data);

        this.setState ({pokemon});
      })
      .catch (err => console.log (err));
  }

  render () {
    return (
      <div className="App" style={{background: `url(${backgroundImage})`}}>
        <PokeList handleOnClick={this.handleOnClick} />
        <DetailView pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
