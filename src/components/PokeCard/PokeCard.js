import React from 'react';
import './pokeCard.scss';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class PokeCard extends React.Component {
  render(){
    const {item} = this.props;
    return(
      <li className="pokemon__list-item" key={item.id}>
        <Link className="pokemon__list-link" to={`/details/${item.id}`} title={item.name}>
          <img src={item.pictureFront} alt={item.name} className="pokemon__image"/>
          <h3 className="pokemon__name">{item.name}</h3>
          <p className="pokemon__id">ID / {item.id}</p>
          <ul className="types__list">
            {item.types.map((type, index) => <li className={`type type-${type.type.name}`} key={index}>{type.type.name}</li>)}
          </ul>
          <p className="evolution">{item.evolvesFrom !== null 
            ? 
            `Evolves from ${item.evolvesFrom.name}`
            :
            `${item.name} is the first evolution`
          }</p>
        </Link>
      </li>
    );
  }
}

PokeCard.propTypes = {
  item: PropTypes.object
};

export default PokeCard;