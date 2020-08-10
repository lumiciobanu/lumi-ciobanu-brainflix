import React from 'react';
import '../Header/Header.scss';
import logo from '../../assets/logos/Logo-brainflix.svg';
import HeaderImg from '../../assets/images/Mohan-muruge.jpg';


function Header(props) {
  return (
    <header className="Header">
      <div className="Header__logo"><img src={logo} alt="Logo" />;</div>
      <div className="Header__elements">
      <div className="Header__search">
        <label className="Header__label">
        <input className="Header__input" placeholder="Search" />
        </label>
      </div>
      <div className="Header__upload">
        <button className="Header__btn">Upload</button>
        <img className="Header__img" src={HeaderImg} />
      </div>
      </div>
    </header>
  );
}

export default Header;