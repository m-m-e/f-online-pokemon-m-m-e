import React from 'react';
import './pokedexApp.scss';
import PokeList from '../PokeList/PokeList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Search from '../Search/Search';
import {FetchPokeData} from '../../services/FetchPokeData';

class PokedexApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pokeData: {},
      searchTerm: ''
    }

    this.getPokemon = this.getPokemon.bind(this);
    this.searchPokemon = this.searchPokemon.bind(this);
  }

  componentDidMount(){
    this.getPokemon();
    const savedPokemonData = JSON.parse(localStorage.getItem('pokeData')) || {};
    if (savedPokemonData.length === 0) {
      this.getPokemon();
    } else {
      this.setState({pokeData: savedPokemonData});
    }
  }
  
  capitaliseFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getPokemon(){
    FetchPokeData()
      .then(data => {
        data.forEach(element => {
          return (
            this.setState(prevState => {
              const newData = {...prevState.pokeData, 
                [element.name]: {
                  "name": this.capitaliseFirstLetter(element.name),
                  "id": element.id,
                  "pictureFront": element.sprites.front_default,
                  "pictureBack": element.sprites.back_default,
                  "types": element.types,
                  "height": element.height,
                  "weight": element.weight,
                  "abilities": element.abilities,
                  "stats": element.stats
                }
              };
              localStorage.setItem('pokeData', JSON.stringify(newData));
              return {pokeData: newData}
            })

          )

        })
      })
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
        <Header />
        <Search searchPokemon={this.searchPokemon} searchTerm={lowerCaseSearchTerm} />
        <PokeList myData={myData} searchTerm={lowerCaseSearchTerm} />
        <Footer />
      </div>
    );
  }
}

export default PokedexApp;