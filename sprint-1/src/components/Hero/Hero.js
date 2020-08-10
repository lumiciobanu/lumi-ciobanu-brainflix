import React from 'react';
import '../Hero/Hero.scss';
import HeroVideo from '../../assets/video/BrainStation-Sample-Video.mp4';
import HeroPlay from '../../assets/icons/Icon-play.svg';
import HeroScrubber from '../../assets/icons/Icon-scrubber-control.svg';
import HeroFullscreen from '../../assets/icons/Icon-fullscreen.svg';
import HeroVolume from '../../assets/icons/Icon-volume.svg';


function Hero(props) {
  return (
    <section className="Hero">
     
      <div className="Hero__controlers">
        <img className="Hero__play" src={HeroPlay} />
        <img className="Hero__scrubber" src={HeroScrubber} />
        <img className="Hero__fullscreen" src={HeroFullscreen} />
        <img className="Hero__volume" src={HeroVolume} />

      </div>

      <video className="Hero__video" source src={HeroVideo} type="video/mp4"> </video>


    </section>
  );
}

export default Hero;