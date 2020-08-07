import React from 'react';
import '../Hero/Hero.scss';
import heroVideo from '../../assets/video/BrainStation-Sample-Video.mp4';

function Hero(props) {
    return (
      <section className="hero">
        
          <video className="hero__video" source src={heroVideo} type="video/mp4"> </video>
        
        
        
      </section>
    );
  }
  
  export default Hero;