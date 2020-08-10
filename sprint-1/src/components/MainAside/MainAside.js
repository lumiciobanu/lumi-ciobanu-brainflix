import React from 'react';
import './MainAside.scss';
import videoImg1 from '../../assets/images/video-list-1.jpg';
import videoImg2 from '../../assets/images/video-list-2.jpg';
import videoImg3 from '../../assets/images/video-list-3.jpg';
import videoImg4 from '../../assets/images/video-list-4.jpg';
import videoImg5 from '../../assets/images/video-list-5.jpg';
import videoImg6 from '../../assets/images/video-list-6.jpg';
import videoImg7 from '../../assets/images/video-list-7.jpg';
import videoImg8 from '../../assets/images/video-list-8.jpg';



function ListItem(props) {
    return (

        <div className="Aside__item">
            <img className="Aside__img" src={props.image} />
            <div className="Aside__header">
                <h2 className="Aside__newTitle">{props.title}</h2>
                <p className="Aside__author">{props.author}</p>
            </div>
        </div>
    )
}



function MainAside(props) {
    let listArray = [
        { image: videoImg1, title: 'Become a Travel Pro In One Wasy Lessson...', author: 'Scotty Cranmer' },
        { image: videoImg2, title: 'Les Houches The Hidden Gem Of The…', author: 'Scotty Cranmer' },
        { image: videoImg3, title: 'Travel Health Useful Medical Information…', author: 'Scotty Cranmer' },
        { image: videoImg4, title: 'Cheap Airline Tickets Great Ways To Save', author: 'Emily Harper' },
        { image: videoImg5, title: 'Take A Romantic Break In A Boutique Hotel', author: 'Ethan Owen' },
        { image: videoImg6, title: 'Choose The Perfect Accommodations', author: 'Lydia Perez' },
        { image: videoImg7, title: 'Cruising Destination Ideas', author: 'Timothy Austin' },
        { image: videoImg8, title: 'Train Travel On Track For Safety', author: 'Scotty Cranmer' }

    ];


    return (
        <section className="Aside">
            <div className="Aside__container">
                <p className="Aside__title">Next Video</p>

                <div className="Aside__list">

                    {listArray.map((item, index) => {
                        return <ListItem key={index} image={item.image} title={item.title} author={item.author} />
                    })
                    }



                </div>


            </div>
        </section >

        
    );
}



export default MainAside;