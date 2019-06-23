import React from 'react';
import './pokeCard.scss';
import PropTypes from 'prop-types';

class PokeCard extends React.Component {
  render(){
    const {item} = this.props;
    return(
      <li className="pokemon__list-item" key={item.id}>
        <img src={item.pictureFront} alt={item.name} className="pokemon__image"/>
        <p className="pokemon__id">ID / {item.id}</p>
        <h3 className="pokemon__name">{item.name}</h3>
        {/* <ul className="stats__list">
          {item.stats.map((stat, index) => <li className="stat" key={index}>{`${stat.stat.name}: ${stat.base_stat}`}</li>)}
        </ul> */}
        {/* <ul className="abilities__list">
          {item.abilities.map((ability, index) => <li className="ability" key={index}>{ability.ability.name}</li>)}
        </ul> */}
        {/* <p className="pokemon__height">{`Height: ${item.height * 10} cm`}</p>
        <p className="pokemon__weight">{`Weight: ${item.weight / 100} kg`}</p> */}
        <ul className="types__list">
          {item.types.map((type, index) => <li className="type" key={index}>{type.type.name}</li>)}
        </ul>
      </li>
    );
  }
}

PokeCard.propTypes = {
  item: PropTypes.object
};

export default PokeCard;