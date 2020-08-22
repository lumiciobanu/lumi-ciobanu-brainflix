import React from 'react';
import './MainLeftComments.scss';
import commentsImg from '../../assets/images/Mohan-muruge.jpg';
import getDateStringServ from '../script';



function CommentItem(props) {
    return (

        <div class="comments__new">

            {/* <img className="comments__img" src={commentsImg} /> */}
            <div className="comments__circle"></div>

            <div class="comments__add"></div><div>
                <div class="comments__header">
                    <p class="comments__name">{props.name}</p>
                    <p class="comments__date">{getDateStringServ(props.timestamp)}</p>
                </div>
                <div class="comments__text">
                    <p>{props.comment}</p>
                </div>
            </div>

        </div>
    )
}


function MainLeftComments(props) {

    // if (!props.comment) {
    //     return null
    // }
    return (
        <div className="comments">
            <div className="comments__container">
                <h2 className="comments__title">3 Comments</h2>

                <div class="comments__div">
                    <img className="comments__img" src={commentsImg} />


                    <div className="comments__object">
                        <p className="comments__subtitle">Join the conversation</p>
                        <form id="commentsForm" className="comments__form">
                            <label className="comments__label" name="yourcomment" for="comment"></label>
                            <textarea className="comments__textarea" id="subject" name="subject" placeholder="Write comment here" />
                            <input className="comments__button" type="submit" value="Comment" />
                        </form>
                    </div>
                </div>
            </div>
            <div class="comments__box">



                {props.comments.map((item, index) => {
                    return <CommentItem key={index} name={item.name} timestamp={item.timestamp} comment={item.comment} image={item.image} text={item.text} />
                })
                }



            </div>

        </div>
    );
}

export default MainLeftComments;