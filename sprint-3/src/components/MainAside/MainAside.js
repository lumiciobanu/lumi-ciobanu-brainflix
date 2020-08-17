import React from 'react';
import './MainAside.scss';
import ListItem from '../ListItem/ListItem';




function MainAside(props) {
    console.log(props.videos)
    return (
        <section className="Aside">
            <div className="Aside__container">
                <p className="Aside__title">Next Video</p>

                <div className="Aside__list">

                    {props.videos.map(video => {
                        return <ListItem video={video} />
                    })}
                </div>


            </div>
        </section >


    );
}



export default MainAside;