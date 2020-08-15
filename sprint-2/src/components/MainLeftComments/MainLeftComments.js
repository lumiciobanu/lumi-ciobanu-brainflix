import React from 'react';
import './MainLeftComments.scss';
import commentsImg from '../../assets/images/Mohan-muruge.jpg';



function CommentItem(props) {
    return (

        <div class="Comments__new">

            <img className="Comments__img" src={commentsImg} />

            <div class="Comments__add"></div><div>
                <div class="Comments__header">
                    <p class="Comments__name">{props.name}</p>
                    <p class="Comments__date">{props.timestamp}</p>
                </div>
                <div class="Comments__text">
                    <p>{props.comment}</p>
                </div>
            </div>

        </div>
    )
}


function MainLeftComments(props) {

    
    return (
        <div className="Comments">
            <div className="Comments__container">
                <h2 className="Comments__title">3 Comments</h2>

                <div class="Comments__div">
                    <img className="Comments__img" src={commentsImg} />


                    <div className="Comments__object">
                        <p className="Comments__subtitle">Join the conversation</p>
                        <form id="CommentsForm" className="Comments__form">
                            <label className="comments__label" name="yourcomment" for="comment"></label>
                            <textarea className="comments__textarea" id="subject" name="subject" placeholder="Write comment here" />
                            <input className="Comments__button" type="submit" value="Comment" />
                        </form>
                    </div>
                </div>
            </div>
            <div class="Comments__box">
                


                    {props.comments.map((item, index) => {
                        return <CommentItem key={index} name={item.name} timestamp={item.timestamp} comment={item.comment} image={item.image} text={item.text} />
                    })
                }


                
            </div>

        </div>
    );
}

export default MainLeftComments;