import React from 'react';
import './MainAside.scss';
import ListItem from '../ListItem/ListItem';




function MainAside(props) {
    console.log(props.videos)
    return (
        <section className="aside">
            <div className="aside__container">
                <p className="aside__title">Next Video</p>

                <div className="aside__list">

                    {props.videos.map(video => {
                        return <ListItem video={video} />
                    })}
                </div>


            </div>
        </section >


    );
}



export default MainAside;