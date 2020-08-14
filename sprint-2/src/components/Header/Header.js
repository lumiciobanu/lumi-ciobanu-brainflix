import React from 'react';
import { BrowserRouter, Router, Route, Switch, Link } from 'react-router-dom';
import '../Header/Header.scss';
import logo from '../../assets/logos/Logo-brainflix.svg';
import HeaderImg from '../../assets/images/Mohan-muruge.jpg';
import UploadPage from '../UploadPage/UploadPage'


function Header(props) {
  return (
    <header className="Header">
      
        <div className="Header__logo"><Link className="Header__link" to="/"><img src={logo} alt="Brainflix Logo" /></Link></div>
        <div className="Header__elements">
          <div className="Header__search">
            <label className="Header__label">
              <input className="Header__input" placeholder="Search" />
            </label>
          </div>
          <div className="Header__upload">
            
           <button className="Header__btn"><Link className="Header__link" to="/UploadPage">Upload</Link></button>
          
         
            <img className="Header__img" src={HeaderImg} />
          </div>
        </div>
    </header>
  );
}

export default Header;