import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.scss';
import logo from '../../assets/logos/Logo-brainflix.svg';
import HeaderImg from '../../assets/images/Mohan-muruge.jpg';


function Header(props) {
  return (
    <header className="header">
      
        <div className="header__logo"><Link className="header__link" to="/"><img src={logo} alt="Brainflix Logo" /></Link></div>
        <div className="header__elements">
          <div className="header__search">
            <label className="header__label">
              <input className="header__input" placeholder="Search" />
            </label>
          </div>
          <div className="header__upload">
            
           <button className="header__btn"><Link className="header__link" to="/UploadPage">Upload</Link></button>
          
         
            <img className="header__img" src={HeaderImg} />
          </div>
        </div>
    </header>
  );
}

export default Header;