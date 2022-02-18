import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';
import './pokemon.css';

class Pokedex extends React.Component {
  render() {
    return (
      <div className='cards'>
        {
          pokemons.map((pokemon) => {
            return <Pokemon key={pokemon.id} pokemon={pokemon} />
          })
        }
      </div>
    )
  }
}

export default Pokedex;