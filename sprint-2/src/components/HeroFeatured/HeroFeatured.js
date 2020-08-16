import React from 'react';
import './HeroFeatured.scss';
import Video from '../Video/Video';
import VideoControllers from '../VideoControllers/VideoControllers';


function HeroFeatured(props) {

  if(!props.video) {
    return null
  }
  return (
    <section className="Hero">
     
       <Video video={props.video.video} image={props.video.image} />
     

      
        <VideoControllers />



    </section>
  );
}

export default HeroFeatured;