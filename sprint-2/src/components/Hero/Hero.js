import React from 'react';
import '../Hero/Hero.scss';
import HeroVideo from '../../assets/video/BrainStation-Sample-Video.mp4';
import VideoImg0 from '../../assets/images/video-list-0.jpg';
import VideoControllers from '../../components/VideoControllers/VideoControllers'


function Hero(props) {
  return (
    <section className="Hero">
      <video className="Hero__video" poster={VideoImg0} source src={HeroVideo} type="video/mp4"> </video>
      

        <VideoControllers />



    </section>
  );
}

export default Hero;