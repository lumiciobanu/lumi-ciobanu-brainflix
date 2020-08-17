import React from 'react';
import '../Video/Video.scss';


function Video(props) {
    return (
      
        <video className="Hero__video" poster={props.image} source src={props.video} type="video/mp4"> </video>
        
           
  
  
      
    );
  }
  
  export default Video;


