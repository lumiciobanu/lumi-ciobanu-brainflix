import React from 'react';
import './ListItem.scss';
import {Link} from 'react-router-dom';


function ListItem(props) {
    return (

        <Link to={"/"+props.video.id}>
        <div className="Aside__item">
            <img className="Aside__img" src={props.video.image} />
            <div className="Aside__header">
                <h2 className="Aside__newTitle">{props.video.title}</h2>
                <p className="Aside__author">{props.video.channel}</p>
            </div>
        </div>
        </ Link>
    )
}

export default ListItem;