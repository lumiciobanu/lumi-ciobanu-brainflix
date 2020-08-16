import React from 'react';
import '../Video/Video.scss';
import HeroVideo from '../../assets/video/BrainStation-Sample-Video.mp4';
import VideoImg0 from '../../assets/images/video-list-0.jpg';
import axios from 'axios';



function Video(props) {
    return (
      
        <video className="Hero__video" poster={props.image} source src={props.video} type="video/mp4"> </video>
        
  
            
  
  
      
    );
  }
  
  export default Video;


