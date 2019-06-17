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
    // const {pokeList} = this.state;
    return (
      <div className="PokedexApp">
        <p>Hola</p>
      </div>
    );
  }
}

export default PokedexApp;