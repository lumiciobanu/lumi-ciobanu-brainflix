import React from 'react';
import '../VideoControllers/VideoControllers.scss';
import HeroPlay from '../../assets/icons/Icon-play.svg';
import HeroFullscreen from '../../assets/icons/Icon-fullscreen.svg';
import HeroVolume from '../../assets/icons/Icon-volume.svg';

function VideoControllers(props) {
    return (
<div className="Hero__controlers">
    <div className="Hero__controllerPlay">
        <img className="Hero__playImg" src={HeroPlay} />
    </div>
    <div className="Hero__controllerContainer"> 
    <div className="Hero__controllerSeek"></div>
    {/* <div className="Hero__controllerTime">0:00 / 0:42</div>  */}
     </div>
    <div className="Hero__controllerLast">
        <img className="Hero__volumeImg" src={HeroVolume} />
        <img className="Hero__FullscreenImg" src={HeroFullscreen} />
    </div>

</div>
);

}

export default VideoControllers;