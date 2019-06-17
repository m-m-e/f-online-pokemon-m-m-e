import React from 'react';
import './pokeList.scss';
import PokeCard from '../PokeCard/PokeCard';

class PokeList extends React.Component {
  render(){
    const {myData, searchTerm} = this.props;
    return(
      <ul className="pokemon__list">
        {myData.length > 0 && myData
          .sort(function(a, b){return a.id - b.id})
          .filter(item => item.name.toLowerCase().includes(searchTerm))
          .map(item => {
            return(
              <PokeCard item={item} />
              // <li className="pokemon__list-item" key={item.id}>
              //   <img src={item.pictureFront} alt={item.name} className="pokemon__image"/>
              //   <p className="pokemon__id">ID / {item.id}</p>
              //   <h3 className="pokemon__name">{item.name}</h3>
              //   <ul className="types__list">
              //     {item.types.map((type, index) => {
              //       return(
              //         <li className="type" key={index}>{type.type.name}</li>
              //       )
              //     })}
              //   </ul>
              // </li>
            )
          })}
      </ul>
    );
  }
}

export default PokeList;