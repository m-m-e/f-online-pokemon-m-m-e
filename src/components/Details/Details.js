import React from 'react';
import PropTypes from 'prop-types';

class Details extends React.Component{
  render(){
    const {match, myData} = this.props;
    const id = parseInt(match.params.id);
    return(
      <div className="details">
        {myData ?
          myData
          .filter(item => item.id === id)
          .map(item => {
            return(
              <div className="details__container" key={item.id}>
                <h2 className="pokemon__name">{item.name}</h2>
                <img src={item.pictureFront} alt={item.name} className="pokemon__image"/>
                <p className="pokemon__id">ID / {item.id}</p>
                <ul className="stats__list">
                  {item.stats.map((stat, index) => <li className="stat" key={index}>{`${stat.stat.name}: ${stat.base_stat}`}</li>)}
                </ul>
                <ul className="abilities__list">
                  {item.abilities.map((ability, index) => <li className="ability" key={index}>{ability.ability.name}</li>)}
                </ul>
                <p className="pokemon__height">{`Height: ${item.height * 10} cm`}</p>
                <p className="pokemon__weight">{`Weight: ${item.weight / 100} kg`}</p>
                <ul className="types__list">
                  {item.types.map((type, index) => <li className="type" key={index}>{type.type.name}</li>)}
                </ul>
                {item.evolvesFrom !== null 
                  ?
                  <p className="evolution">{`Evolves from ${item.evolvesFrom.name}`}</p>

                  :
                  <p className="no__evolution">{`${item.name} is the first evolution`}</p>
                }
                </div>
              )
            })
          :
          <p className="error__message">I don't have any data right now!</p>
        }
        
      </div>
    );
  }
};

Details.propTypes = {
  match: PropTypes.object,
  myData: PropTypes.array
};


export default Details;