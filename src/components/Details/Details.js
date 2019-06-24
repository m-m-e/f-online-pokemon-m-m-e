import React from 'react';
import PropTypes from 'prop-types';
import './details.scss';

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
                <div className="details__box details__1">
                  <h2 className="pokemon__name">{item.name}</h2>
                  <div className="image__container">
                    <img 
                      src={item.pictureFront} 
                      alt={`Front of ${item.name}`} 
                      className="pokemon__image"
                    />
                    <img 
                      src={item.pictureBack} 
                      alt={`Back of ${item.name}`} 
                      className="pokemon__image"
                    />
                  </div>
                  <p className="pokemon__id">ID / {item.id}</p>
                  <p className="pokemon__height">{`Height: ${item.height * 10} cm`}</p>
                  <p className="pokemon__weight">{`Weight: ${item.weight / 100} kg`}</p>
                  {item.evolvesFrom !== null 
                    ?
                    <p className="evolution">{`Evolves from ${item.evolvesFrom.name}`}</p>

                    :
                    <p className="no__evolution">{`${item.name} is the first evolution`}</p>
                  }
                </div>
                <div className="details__box details__2">
                  <div className="types__container">
                    <h3 className="types__subtitle">Types</h3>
                    <ul className="types__list">
                      {item.types.map((type, index) => <li className={`type type-${type.type.name}`} key={index}>{type.type.name}</li>)}
                    </ul>
                  </div>
                  <h3 className="stats__subtitle">Stats</h3>
                  <ul className="stats__list">
                    {item.stats.map((stat, index) => <li className="stat" key={index}>{`${stat.stat.name}: ${stat.base_stat}`}</li>)}
                  </ul>
                  <h3 className="stats__subtitle">Abilities</h3>
                  <ul className="abilities__list">
                    {item.abilities.map((ability, index) => <li className="ability" key={index}>{ability.ability.name}</li>)}
                  </ul>
                </div>
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