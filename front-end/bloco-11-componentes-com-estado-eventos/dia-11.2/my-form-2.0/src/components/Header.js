import React, { Component } from 'react';
import trybeLogo from '../assets/images/logo-trybe.png';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header--logo">
          <img src={ trybeLogo } alt="Trybe logo" className="header--img" />
        </div>
        <input type="text" placeholder="Buscar tópicos" className="header--input" />
      </header>
    );
  }
}

export default Header;
