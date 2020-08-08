import React from 'react';
import './MainLeftComments.scss';

import commentsImg from '../../assets/images/Mohan-muruge.jpg';



function CommentItem(props) {
    return (
        <div>
            <div class="Comments__header">
                <p class="Comments__name">{props.name}</p>
                <p class="Comments__date">{props.date}</p>
            </div>
            <div class="Comments__text">
                <p>{props.comment}</p>
            </div>
        </div>

    )
}


function MainLeftComments(props) {

    let commentArray = [
        {
            name: "Micheal Lyons",
            date: "12/04/2019",
            comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
            // image: "../assets/images/Mohan-muruge.jpg"
        },

        {
            name: "Gary Wong",
            date: "12/04/2019",
            comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
            // image: "../assets/images/male-placeholder-image.jpeg"
        },

        {
            name: "Theodore Duncan",
            date: "12/04/2019",
            comment: "How can someone be so good. You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
            // image: "../assets/images/male-placeholder-image.jpeg"
        }
    ]


    return (
        <div className="Comments">
            <div className="Comments__container">
                <h2 className="comments__title">3 Comments</h2>

                <div class="Comments__div">
                    <img className="comments__img" src={commentsImg} />


                    <div class="Comments__form">
                        <form id="CommentsForm">
                            <label class="comments__label" for="name">Name</label>
                            <input type="text" id="name" name="yourname" placeholder="Your name" />
                            <label class="comments__label" name="yourcomment" for="comment">Comment</label>
                            <textarea class="comments__textarea" id="subject" name="subject" placeholder="Add a new comment" />
                            <input class="button" type="submit" value="Comment" />
                        </form>
                    </div>
                </div>
            </div>
            <div class="Comments__box">
                <div class="Comments__new">

                    <img className="Comments__img" src={commentsImg} />

                    <div class="Comments__add">
                    {commentArray.map((item, index) => {
                        return <CommentItem key={index} name={item.name} date={item.date} comment={item.comment} />
                    })
                    }
                    </div>

                </div>
            </div>

        </div>
    );
}

export default MainLeftComments;