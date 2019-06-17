import React from 'react';

class PokedexApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pokeList: [],
      pokeData: {}
    }

    this.getPokemonList = this.getPokemonList.bind(this);
  }

  componentDidMount(){
    this.getPokemonList();
    const savedPokemonList = JSON.parse(localStorage.getItem('pokeList')) || [];
    const savedPokemonData = JSON.parse(localStorage.getItem('pokeData')) || {};
    if (savedPokemonList.length === 0) {
      this.getPokemonList();
    } else {
      this.setState({pokeList: savedPokemonList});
      this.setState({pokeData: savedPokemonData});
    }
  }

  getPokemonList(){
    const endpoint = "https://pokeapi.co/api/v2/pokemon?limit=25/";
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        this.setState({pokeList: data.results});
        localStorage.setItem('pokeList', JSON.stringify(data.results));
        for (let i = 0; i < 25; i++) {
          fetch(data.results[i].url)
            .then(response => response.json())
            .then(data => {
              this.setState(prevState => {
                const newData = {...prevState.pokeData, 
                  [data.name]: {
                  "id": data.id,
                  "picture-front": data.sprites.front_default,
                  "picture-back": data.sprites.back_default,
                  "types": data.types
                  }
                };
                localStorage.setItem('pokeData', JSON.stringify(newData));
                return(
                  {pokeData: newData}
                )
              })
            })
          }
      })
      .catch(error => console.error(error))
  }

  render(){
    const {pokeData} = this.state;
    return (
      <div className="PokedexApp">
        <h1 className="title">Pokedex</h1>
        <h2 className="subtitle">Search here for your favourite Pokemon!</h2>
        <ul className="pokemon__list">
{/*           
          {pokeData.map(item => {
            return(
              <li className="pokemon__list-item" key={item.id}>
                <h3 className="pokemon__name">{item.name}</h3>
                <img src={item.pictureFront} alt={item.name} className="pokemon__image"/>
              {item.types.map(type => )}
              </li>
            )
          })}
           */}
        </ul>
      </div>
    );
  }
}

export default PokedexApp;