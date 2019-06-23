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
              <PokeCard item={item} key={item.id} />
            )
          })}
      </ul>
    );
  }
}

export default PokeList;