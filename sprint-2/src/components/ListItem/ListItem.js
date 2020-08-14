import React from 'react';
import './ListItem.scss';


function ListItem(props) {
    return (

        <div className="Aside__item">
            <img className="Aside__img" src={props.video.image} />
            <div className="Aside__header">
                <h2 className="Aside__newTitle">{props.video.title}</h2>
                <p className="Aside__author">{props.video.author}</p>
            </div>
        </div>
    )
}

export default ListItem;