import React from 'react';
import './pokeCard.scss';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class PokeCard extends React.Component {
  render(){
    const {item} = this.props;
    return(
      <li className="pokemon__list-item" key={item.id}>
        <Link to={`/details/${item.id}`}>
          <img src={item.pictureFront} alt={item.name} className="pokemon__image"/>
          <p className="pokemon__id">ID / {item.id}</p>
          <h3 className="pokemon__name">{item.name}</h3>
          <ul className="types__list">
            {item.types.map((type, index) => <li className="type" key={index}>{type.type.name}</li>)}
          </ul>
        </Link>
      </li>
    );
  }
}

PokeCard.propTypes = {
  item: PropTypes.object
};

export default PokeCard;