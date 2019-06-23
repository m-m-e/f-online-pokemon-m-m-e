import React from 'react';
import PokeList from '../PokeList/PokeList';
import Search from '../Search/Search';
import PropTypes from 'prop-types';

class Home extends React.Component{
  render(){
    const {searchPokemon, searchTerm, myData} = this.props;
    return(
      <div className="home">
        <Search searchPokemon={searchPokemon} searchTerm={searchTerm} />
        <PokeList myData={myData} searchTerm={searchTerm} />
      </div>
    );
  }
};

Home.propTypes = {
  searchTerm: PropTypes.string,
  myData: PropTypes.array,
  searchPokemon: PropTypes.func
};

export default Home;