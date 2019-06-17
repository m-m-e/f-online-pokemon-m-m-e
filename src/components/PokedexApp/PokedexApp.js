import React from 'react';

class PokedexApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pokeList: [],
      pokeData: {
        name: {
          "id": 0,
          "picture-front": "",
          "picture-back": "",
          "types": []
        }
      }
    }

    this.getPokemonList = this.getPokemonList.bind(this);
    // this.getPokemonData = this.getPokemonData.bind(this);
  }

  componentDidMount(){
    this.getPokemonList();
  }

  getPokemonList(){
    const endpoint = "https://pokeapi.co/api/v2/pokemon?limit=25/";
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        this.setState({pokeList: data.results});
        fetch(data.results[0].url)
          .then(response => response.json())
          .then(data => {
            const newPokemon = {
              [data.name]: {
                "id": data.id,
                "picture-front": data.sprites.front_default,
                "picture-back": data.sprites.back_default,
                "types": data.types
              }
            };
          this.setState({pokeData: newPokemon})
        })
      })
      .catch(error => console.error(error))
  }

  
    // for (let i = 0; i < 25; i++){
    //   fetch(pokeList[i].url)
    //     .then(response => response.json())
    //     .then(data => {
    //       newPokemon = {
    //         [data.name]: {
    //           "id": data.id,
    //           "picture-front": data.sprites.front_default,
    //           "picture-back": data.sprites.back_default,
    //           "types": data.types
    //         }
    //       };
    //       this.setState({pokeData: newPokemon})
    //       // this.setState(prevState => ({pokeData: [...prevState.pokeData, newPokemon]}))
    //     })

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