import React from 'react';
import './HeroFeatured.scss';
import Video from '../Video/Video';
import VideoControllers from '../VideoControllers/VideoControllers';


function HeroFeatured(props) {
  return (
    <section className="Hero">
     
       <Video video={props.featured.vide} image={props.featured.image} />
     

      
        <VideoControllers />



    </section>
  );
}

export default HeroFeatured;