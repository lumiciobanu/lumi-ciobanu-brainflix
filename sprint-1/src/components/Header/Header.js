import React from 'react';
import '../Header/Header.scss';
import headerImg from '../../assets/images/Mohan-muruge.jpg';
import logo from '../../assets/logos/Logo-brainflix.svg';

function Header(props) {
  return (
    <header className="header">
      <div className="header__logo"><img src={logo} alt="Logo" />;</div>
      <div className="header__search">
        <input className="search" placeholder="Search..." />
      </div>
      <div className="header__upload">
        <button className="header__btn">Text here </button>
        <img className="header__img" src={headerImg} />

      </div>
    </header>
  );
}

export default Header;