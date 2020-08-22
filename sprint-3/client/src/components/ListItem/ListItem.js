import React from 'react';
import './ListItem.scss';
import {Link} from 'react-router-dom';


function ListItem(props) {
    return (

        <Link to={"/"+props.video.id}>
        <div className="aside__item">
            <img className="aside__img" src={props.video.image} />
            <div className="aside__header">
                <h2 className="aside__newTitle">{props.video.title}</h2>
                <p className="aside__author">{props.video.channel}</p>
            </div>
        </div>
        </ Link>
    )
}

export default ListItem;