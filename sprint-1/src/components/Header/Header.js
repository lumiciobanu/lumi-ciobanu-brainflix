import React from 'react';
import '../Header/Header.scss';
import headerImg from '../../assets/images/Mohan-muruge.jpg';
import logo from '../../assets/logos/Logo-brainflix.svg';

function Header(props) {
  return (
    <header className="Header">
      <div className="Header__logo"><img src={logo} alt="Logo" />;</div>
      <div className="Header__search">
        <input className="Search" placeholder="Search..." />
      </div>
      <div className="Header__upload">
        <button className="Header__btn">Text here </button>
        <img className="Header__img" src={headerImg} />

      </div>
    </header>
  );
}

export default Header;