import React from 'react';
import './pokedexApp.scss';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Details from '../Details/Details';
import {FetchPokeData} from '../../services/FetchPokeData';
import { Route, Switch } from 'react-router-dom';

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
    const savedPokemonData = JSON.parse(localStorage.getItem('pokeData')) || {};
    if (Object.values(savedPokemonData).length === 0) {
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
      .then(newData => {
        console.log(newData);
        newData.forEach(element => {
          console.log(element);
          return (
            this.setState(prevState => {
              const newPokeData = {...prevState.pokeData, 
                [element.name]: {
                  "name": this.capitaliseFirstLetter(element.name),
                  "id": element.id,
                  "pictureFront": element.sprites.front_default,
                  "pictureBack": element.sprites.back_default,
                  "types": element.types,
                  "height": element.height,
                  "weight": element.weight,
                  "abilities": element.abilities,
                  "stats": element.stats,
                  "evolution": element.chain
                }
              };
              localStorage.setItem('pokeData', JSON.stringify(newPokeData));
              return {pokeData: newPokeData};
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
        <main className="main">
          <Switch>
              <Route
                exact path="/"
                render={routerProps => (
                  <Home 
                    searchPokemon={this.searchPokemon} 
                    searchTerm={lowerCaseSearchTerm} 
                    myData={myData}
                  />
                )}
              />
              <Route
                path="/details/:id"
                render={routerProps => (
                  <Details match={routerProps.match} myData={myData} />
                )}
              />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default PokedexApp;