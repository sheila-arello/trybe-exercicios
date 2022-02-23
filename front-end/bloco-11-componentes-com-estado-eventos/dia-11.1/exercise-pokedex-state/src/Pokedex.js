import React from 'react';
import Pokemon from './Pokemon';
import './style.css';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeIndex: 0,
      Electric: 0,
      Poison: 0,
      Fire: 0,
      Bug: 0,
      Psychic: 0,
      Normal: 0,
      Dragon: 0
    };
    // Não precisa do bind pq usei arrow function
    // this.handleNext = this.handleNext.bind(this);
  }

  handleNext = () => {
    this.setState ((lastIndex, _props) => {
      console.log(lastIndex.pokeIndex);
      if (lastIndex.pokeIndex === this.props.pokemons.length-1) return { pokeIndex: 0 };
      return { pokeIndex: lastIndex.pokeIndex + 1 };
    })
  }

  handleNextType = (e) => {
    const name = e.target.innerText; 
    console.log(name);
  }


  render() {
      return (
        <>
          <div className="pokedex">
              <Pokemon pokemon={this.props.pokemons[this.state.pokeIndex]} />
              {/* {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)} */}
          </div>
          <div className="filter--name">
            <div className='filters'>
            {this.props.pokemons.forEach((pokemon) => {
              console.log(pokemon.type);
              return <button className='btnOrange' onClick={ this.handleNextType }>Pikachu</button>
            })}
            </div>
            <button className='btnVerde' onClick={ this.handleNext }>Next</button>
          </div>
        </>
      );
  }
}

export default Pokedex;