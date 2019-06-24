import React from 'react';
import './header.scss';
import {Link} from 'react-router-dom';

class Header extends React.Component {
  render(){
    return(
      <header className="header">
          <Link to="/">
            <i className="fas fa-home" title="Return to home"/>
          </Link>
          <h1 className="pokedex__title">Pokedex</h1>
          <h2 className="pokedex__subtitle">What's your favourite Pokemon?</h2>
      </header>
    );
  }
};

export default Header;