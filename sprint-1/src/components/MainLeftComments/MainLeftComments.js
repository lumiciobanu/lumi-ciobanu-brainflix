import React from 'react';
import './MainLeftComments.scss';

import commentsImg from '../../assets/images/Mohan-muruge.jpg';


function MainLeftComments(props) {
    return (
        <section className="comments">
            <div className="comments__container">
                <h2 className="comments__title">3 Comments</h2>

                <div class="comments__div">
                    <img className="comments__img" src={commentsImg} />


                    <div class="comments__form">
                        <form id="commentsForm">
                            <label class="comments__label" for="name">Name</label>
                            <input type="text" id="name" name="yourname" placeholder="Your name" />
                            <label class="comments__label" name="yourcomment" for="comment">Comment</label>
                            <textarea class="comments__textarea" id="subject" name="subject" placeholder="Add a new comment" />
                            <input class="button" type="submit" value="Comment" />
                        </form>
                    </div>
                </div>
            </div>
            <div class="comments__box">
                <div class="comments__new">
                    
                <img className="comments__img" src={commentsImg} />
                    
                    <div class="comments__add">
                        <div class="comments__header">
                            <p class="comments__name">Michaeal Lyons</p>
                            <p class="comments__date">12/18/2018</p>
                        </div>
                        <div class="comments__text">
                            <p>They BLEW the ROOF off at their
                                last show, once everyone started
                                figuring out they were going. This is
                                still simply the greatest opening of a
                                concert I have EVER witnessed.</p>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}

export default MainLeftComments;