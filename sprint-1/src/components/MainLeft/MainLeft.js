import React from 'react';
import './MainLeft.scss';
import viewsIcon from '../../assets/icons/Icon-views.svg';
import likesIcon from '../../assets/icons/Icon-likes.svg';



function MainLeft(props) {
  return (
    <section className="mainLeft">
      <div className="mainLeft__header">
        <h1 className="mainLeft__title">BMX Rampage: 2018 Highlights</h1>
        <div className="mainLeft__meta">
          <div className="mainLeft__meta-left">
            <p className="mainLeft__author">By Red Cow</p>
            <p className="mainLeft__date">12/18/2018</p>
          </div>

          <div className="mainLeft__meta-right">
            <div className="mainLeft__views">
              <img className="mainLeft__viewsIcon" src={viewsIcon} />
              <p className="mainLeft__viewsText">10000</p>
            </div>
            <div className="mainLeft__likes">
              <img className="mainLeft__likesIcon" src={likesIcon} />
              <p className="mainLeft__likesText">10000</p>
            </div>
          </div>
        </div>

      </div>

      <div className="mainLeft__body">
        <p className="mainLeft__text">
          On a gusty day in Southern Utah, a group of 25
          daring mountain bikers blew the doors off what is
          possible on two wheels, unleashing some of the
          biggest moments the sport has ever seen. While
          mother nature only allowed for one full run before
          the conditions made it impossible to ride, that was
          all that was needed for event veteran Kyle Strait,
          who won the event for the second time -- eight years
          after his first Red Cow Rampage title
        </p>
      </div>

     
    </section>
  );
}

export default MainLeft;