import React from 'react';
import MainLeftComments from '../MainLeftComments/MainLeftComments';
import MainLeftHeader from '../MainLeftHeader/MainLeftHeader';
import './MainLeft.scss';





function MainLeft(props) {
  if (!props.info) {
    return null
  }
  
  return (
    <section className="MainLeft">
      <div className="MainLeft__header">
       
        <MainLeftHeader title={props.info.title} channel={"By "+props.info.channel} id={props.info.id} timestamp={props.info.timestamp} views={props.info.views} likes={props.info.likes} description={props.info.description}/>

      </div>
      
      <MainLeftComments comments={props.info.comments} />

    </section>

  );
}

export default MainLeft;

