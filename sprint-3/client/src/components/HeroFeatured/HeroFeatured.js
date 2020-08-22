import React from 'react';
import './HeroFeatured.scss';
import Video from '../Video/Video';
import VideoControllers from '../VideoControllers/VideoControllers';


function HeroFeatured(props) {

  if(!props.video) {
    return null
  }
  return (
    <section className="hero">
     
       <Video video={props.video.video} image={props.video.image} />
     

      
        <VideoControllers />



    </section>
  );
}

export default HeroFeatured;