import React from 'react';
import './MainLeftHeader.scss';
import viewsIcon from '../../assets/icons/Icon-views.svg';
import likesIcon from '../../assets/icons/Icon-likes.svg';
import getDateStringServ from '../script';

function MainLeftHeader(props) {

 
    return (
      <div>
        <div className="MainLeft__header">
          <h1 className="MainLeft__title">{props.title}</h1>
          <div className="MainLeft__meta">
            <div className="MainLeft__meta-left">
              <p className="MainLeft__author">{props.channel}</p>
              <p className="MainLeft__date">{getDateStringServ(props.timestamp)}</p>
            </div>
  
            <div className="MainLeft__meta-right">
              <div className="MainLeft__views">
                <img className="MainLeft__icon MainLeft__viewsIcon" src={viewsIcon} />
                <p className="MainLeft__viewsText">{props.views}</p>
              </div>
              <div className="MainLeft__likes">
                <img className="MainLeft__icon MainLeft__likesIcon" src={likesIcon} />
                <p className="MainLeft__likesText">{props.likes}</p>
              </div>
            </div>
          </div>
        </div>
        <p className="MainLeft__text">{props.description}</p>
      </div>
    )
  }

  export default MainLeftHeader;