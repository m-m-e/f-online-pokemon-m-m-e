import React from 'react';

class PokedexApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pokeData: [
        {
          "name": "bulbasaur",
          "id": 1,
          "picture-front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          "picture-back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
          "types": [ 
            {
              "slot": 2,
              "type": {
                  "name": "poison",
                  "url": "https://pokeapi.co/api/v2/type/4/"
              }
            },
            {
              "slot": 1,
              "type": {
                  "name": "grass",
                  "url": "https://pokeapi.co/api/v2/type/12/"
              }
            }]
        }
      ]
    }
  }
  render(){
    const {pokeData} = this.state;
    return (
      <div className="PokedexApp">
        <p>{pokeData[0].name}</p>
      </div>
    );
  }
}

export default PokedexApp;