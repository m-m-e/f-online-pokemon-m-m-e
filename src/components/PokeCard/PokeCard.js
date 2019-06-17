import React from 'react';
import './pokeCard.scss';

class PokeCard extends React.Component {
  render(){
    const {item} = this.props;
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
    );
  }
}

export default PokeCard;