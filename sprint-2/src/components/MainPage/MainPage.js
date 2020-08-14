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
import axios from 'axios';

//1af0jruup5gu

const URL = 'https://project-2-api.herokuapp.com';
const KEY = '?api_key=7f04c159-f06c-415a-ab44-82b82e7c16f8';

class MainPage extends React.Component {
    listArray = [
        {
            id: 0,
            image: videoImg0,
            title: 'BMX Rampage: 2018 Highlights',
            channel: 'Red Cow', timestamp: '12/18/2018',
            views: '1,001,023', likes: '110,985',
            description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
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
            }]
        },
        
    ];

    state = {
        videoList: this.listArray,
        featured: this.listArray[0]

    }

    componentDidMount() {
        axios.get(URL + "/videos" + KEY)
            .then(results => {
                let videos = results.data
                
                // this.setState({ videoList: results.data })

                axios.get(URL + "/videos/1af0jruup5gu" + KEY)
                .then(results => {
                    console.log(results)
                    this.setState({ featured: results.data,
                    videoList: videos
                 })
                }
                )
               
                }    
                   ) 
                   
    }



    render() {

        let filteredVideos = this.state.videoList.filter(video => video.id !== this.state.featured.id)

        return (
            <>
                <HeroFeatured featured={this.state.featured} />

                <section className="Main">
                    <MainLeft featured={this.state.featured} />
                    <MainAside videos={filteredVideos} />
                </section>
            </>
        );
    }
}


export default MainPage;
