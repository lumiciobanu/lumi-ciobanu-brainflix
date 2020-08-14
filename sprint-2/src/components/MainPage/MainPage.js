import React from 'react';
import HeroFeatured from '../Hero/Hero';
import MainLeft from '../MainLeft/MainLeft';
import MainAside from '../MainAside/MainAside';
import './MainPage.scss';
import videoImg0 from '../../assets/images/video-list-0.jpg';
import videoImg1 from '../../assets/images/video-list-1.jpg';
import videoImg2 from '../../assets/images/video-list-2.jpg';
import videoImg3 from '../../assets/images/video-list-3.jpg';
import videoImg4 from '../../assets/images/video-list-4.jpg';
import videoImg5 from '../../assets/images/video-list-5.jpg';
import videoImg6 from '../../assets/images/video-list-6.jpg';
import videoImg7 from '../../assets/images/video-list-7.jpg';
import videoImg8 from '../../assets/images/video-list-8.jpg';
import commentsImg from '../../assets/images/Mohan-muruge.jpg';

class MainPage extends React.Component {
    listArray = [
        {id: 0,
        image: videoImg0, 
        title: 'BMX Rampage: 2018 Highlights', 
        author: 'Red Cow', date: '12/18/2018', 
        views: '1,001,023', likes: '110,985', 
        text: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title', 
        comments: [{
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
        }] },
        { id: 1, image: videoImg1, title: 'Become a Travel Pro In One Wasy Lessson...', author: 'Scotty Cranmer' },
        { id: 2, image: videoImg2, title: 'Les Houches The Hidden Gem Of The…', author: 'Scotty Cranmer' },
        { id: 3, image: videoImg3, title: 'Travel Health Useful Medical Information…', author: 'Scotty Cranmer' },
        { id: 4, image: videoImg4, title: 'Cheap Airline Tickets Great Ways To Save', author: 'Emily Harper' },
        { id: 5, image: videoImg5, title: 'Take A Romantic Break In A Boutique Hotel', author: 'Ethan Owen' },
        { id: 6, image: videoImg6, title: 'Choose The Perfect Accommodations', author: 'Lydia Perez' },
        { id: 7, image: videoImg7, title: 'Cruising Destination Ideas', author: 'Timothy Austin' },
        { id: 8, image: videoImg8, title: 'Train Travel On Track For Safety', author: 'Scotty Cranmer' }

    ];
    
    state = {
        videoList: this.listArray,
        featured: this.listArray[0]
        
    }


    render() {

        let filteredVideos = this.state.videoList.filter(video => video.id !== this.state.featured.id)

        return (
                    <>
                        <HeroFeatured featured={this.state.featured} />
            
                        <section className="Main">
                            <MainLeft featured={this.state.featured} />
                            {/* <MainAside featured={this.state.featured}/> */}
                            <MainAside videos={filteredVideos} />
                        </section>                    
                        </>
                );
    }
}


export default MainPage;
