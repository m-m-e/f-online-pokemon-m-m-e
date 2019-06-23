import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  render(){
    const {searchPokemon, searchTerm} = this.props;
    return(
      <div className="filter__container">
        <label htmlFor="search" className="search__label">Enter the name of a Pokemon here </label>
        <input type="text" id="search" className="search__box" onChange={searchPokemon} value={searchTerm}/>
      </div>
    )
  }
};

Search.propTypes = {
  searchPokemon: PropTypes.func,
  searchTerm: PropTypes.string
};

export default Search;