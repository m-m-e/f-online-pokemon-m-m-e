import React from 'react';
import './pokedexApp.scss';
import PokeList from '../PokeList/PokeList';

class PokedexApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pokeList: [],
      pokeData: {},
      searchTerm: ''
    }

    this.getPokemonList = this.getPokemonList.bind(this);
    this.searchPokemon = this.searchPokemon.bind(this);
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

  
  capitaliseFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
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
                    "name": this.capitaliseFirstLetter(data.name),
                    "id": data.id,
                    "pictureFront": data.sprites.front_default,
                    "pictureBack": data.sprites.back_default,
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

  searchPokemon(event){
    const searchInput = event.currentTarget.value;
    this.setState({searchTerm: searchInput})
  }

  render(){
    const {pokeData, searchTerm} = this.state;
    const myData = Object.values(pokeData) || [];
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      <div className="pokedexApp">
        <h1 className="pokedex__title">Pokedex</h1>
        <h2 className="pokedex__subtitle">Search here for your favourite Pokemon!</h2>
        <div className="filter__container">
          <label htmlFor="search" className="search__label">Enter the name of a Pokemon here </label>
          <input type="text" id="search" className="search__box" onChange={this.searchPokemon}/>
        </div>
        <PokeList myData={myData} searchTerm={lowerCaseSearchTerm} />
        {/* <ul className="pokemon__list">
          {myData.length > 0 && myData
            .sort(function(a, b){return a.id - b.id})
            .filter(item => item.name.toLowerCase().includes(lowerCaseSearchTerm))
            .map(item => {
              return(
                <li className="pokemon__list-item" key={item.id}>
                  <img src={item.pictureFront} alt={item.name} className="pokemon__image"/>
                  <p className="pokemon__id">ID / {item.id}</p>
                  <h3 className="pokemon__name">{item.name}</h3>
                  <ul className="types__list">
                    {item.types.map((type, index) => {
                      return(
                        <li className="type" key={index}>{type.type.name}</li>
                      )
                    })}
                  </ul>
                </li>
              )
          })}
        </ul> */}
      </div>
    );
  }
}

export default PokedexApp;