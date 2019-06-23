import React from 'react';
import './header.scss';

class Header extends React.Component {
  render(){
    return(
      <header id="topOfPage" className="header">
          <h1 className="pokedex__title">Pokedex</h1>
          <h2 className="pokedex__subtitle">Search for your favourite Pokemon!</h2>
      </header>
    );
  }
};

export default Header;