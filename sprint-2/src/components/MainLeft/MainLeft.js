import React from 'react';
import MainLeftComments from '../MainLeftComments/MainLeftComments';
import './MainLeft.scss';
import viewsIcon from '../../assets/icons/Icon-views.svg';
import likesIcon from '../../assets/icons/Icon-likes.svg';


function HeaderItem(props) {

  const functionHere = ()  => {

  }

  return (
    <div>
      <div className="MainLeft__header">
        <h1 className="MainLeft__title">{props.title}</h1>
        <div className="MainLeft__meta">
          <div className="MainLeft__meta-left">
            <p className="MainLeft__author">{props.channel}</p>
            <p className="MainLeft__date">{functionHere(props.timestamp)}</p>
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


function MainLeft(props) {

  
  return (
    <section className="MainLeft">
      <div className="MainLeft__header">
       
        <HeaderItem title={props.featured.title} channel={props.featured.channel} timestamp={props.featured.timestamp} views={props.featured.views} likes={props.featured.likes} description={props.featured.description}/>

      </div>
      
      <MainLeftComments comments={props.featured.comments} />

    </section>

  );
}

export default MainLeft;
