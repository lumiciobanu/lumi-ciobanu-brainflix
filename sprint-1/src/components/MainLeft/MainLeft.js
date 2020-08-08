import React from 'react';
import MainLeftComments from '../MainLeftComments/MainLeftComments';

import './MainLeft.scss';
import viewsIcon from '../../assets/icons/Icon-views.svg';
import likesIcon from '../../assets/icons/Icon-likes.svg';

function HeaderItem(props) {
  return (
    <div>
    <div className="MainLeft__header">
      <h1 className="MainLeft__title">{props.title}</h1>
      <div className="MainLeft__meta">
        <div className="MainLeft__meta-left">
          <p className="MainLeft__author">{props.author}</p>
          <p className="MainLeft__date">{props.date}</p>
        </div>

        <div className="MainLeft__meta-right">
          <div className="MainLeft__views">
            <img className="MainLeft__viewsIcon" src={viewsIcon} />
            <p className="MainLeft__viewsText">{props.views}</p>
          </div>
          <div className="MainLeft__likes">
            <img className="MainLeft__likesIcon" src={likesIcon} />
            <p className="MainLeft__likesText">{props.likes}</p>
          </div>
        </div>
      </div>
    </div>
    <p className="MainLeft__text">{props.text}</p>
    </div>
  )
}


function MainLeft(props) {

  let headerArray = [{
    title: 'BMX Rampage: 2018 Highlights',
    author: 'By Red Cow',
    date: '12/18/2018',
    views: '1,001,023',
    likes: '110,985'
  } ];

  return (
    <section className="MainLeft">
      <div className="MainLeft__header">
        {headerArray.map((item, index) => {
          return <HeaderItem key={index} title={item.title} author={item.author} author={item.date} views={item.views} likes={item.likes} text={props.text} />
        })
        }

      </div>

      <p className="MainLeft__text">
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

      <MainLeftComments />

    </section>

  );
}

export default MainLeft;
