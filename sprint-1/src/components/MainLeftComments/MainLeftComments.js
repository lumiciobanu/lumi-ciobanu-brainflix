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
                    <p class="Comments__date">{props.date}</p>
                </div>
                <div class="Comments__text">
                    <p>{props.comment}</p>
                </div>
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
            image: commentsImg
        },

        {
            name: "Gary Wong",
            date: "12/04/2019",
            comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
            image: commentsImg
        },

        {
            name: "Theodore Duncan",
            date: "12/04/2019",
            comment: "How can someone be so good. You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
            image: commentsImg
        }
    ]


    return (
        <div className="Comments">
            <div className="Comments__container">
                <h2 className="Comments__title">3 Comments</h2>

                <div class="Comments__div">
                    <img className="Comments__img" src={commentsImg} />


                    <div className="Comments__form">
                        <p className="Comments__subtitle">Join the conversation</p>
                        <form id="CommentsForm">
                            <label className="comments__label" name="yourcomment" for="comment"></label>
                            <textarea className="comments__textarea" id="subject" name="subject" placeholder="Write comment here" />
                            <input className="Comments__button" type="submit" value="Comment" />
                        </form>
                    </div>
                </div>
            </div>
            <div class="Comments__box">
                


                    {commentArray.map((item, index) => {
                        return <CommentItem key={index} name={item.name} date={item.date} comment={item.comment} image={item.image} />
                    })
                    }


                
            </div>

        </div>
    );
}

export default MainLeftComments;