import React from 'react';
import HeroFeatured from '../HeroFeatured/HeroFeatured';
import MainLeft from '../MainLeft/MainLeft';
import MainAside from '../MainAside/MainAside';
import './MainPage.scss';
import videoImg0 from '../../assets/images/video-list-0.jpg';
import commentsImg from '../../assets/images/Mohan-muruge.jpg';
import axios from 'axios';


const URL = 'http://localhost:8080';
// const KEY = '?api_key=7f04c159-f06c-415a-ab44-82b82e7c16f8';

class MainPage extends React.Component {
    // listArray = [
    //     {
    //         id: 0,
    //         image: videoImg0,
    //         title: 'BMX Rampage: 2018 Highlights',
    //         channel: 'Red Cow', timestamp: '12/18/2018',
    //         views: '1,001,023', likes: '110,985',
    //         description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
    //         comments: [{
    //             name: "Micheal Lyons",
    //             date: "12/04/2019",
    //             comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
    //             image: commentsImg
    //         },

    //         {
    //             name: "Gary Wong",
    //             date: "12/04/2019",
    //             comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
    //             image: commentsImg
    //         },

    //         {
    //             name: "Theodore Duncan",
    //             date: "12/04/2019",
    //             comment: "How can someone be so good. You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
    //             image: commentsImg
    //         }]
    //     },
        
    // ];

    // state = {
    //     videoList: this.listArray,
    //     featured: this.listArray[0]

    // }

    state = {
        featuredMovie: null,
        videoList: []
    }

    componentDidMount() {

        let defaultVideoId = "1af0jruup5gu";
        if (this.props.match.params.videoId) {
            defaultVideoId = this.props.match.params.videoId
        }

        axios.get("/videos")
            .then(results => {
                let videos = results.data
                
                // this.setState({ videoList: results.data })

                axios.get("/videos/1af0jruup5gu")
                .then(results => {
                    // console.log(results)
                    this.setState({ 
                        featuredMovie: results.data,
                        videoList: videos
                 })
                }
                )
               
                }    
                   ) 
                   
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
            axios.get("/videos/"+this.props.match.params.videoId).then(results => {
                console.log(results)
                this.setState({ featuredMovie: results.data

                })
            
            })
        }
    }


    render() {

        let filteredVideos = this.state.videoList.filter(video => video.id !== this.state.featuredMovie.id)

        return (
            <>
                <HeroFeatured video={this.state.featuredMovie} />

                <section className="Main">
                    <MainLeft info={this.state.featuredMovie} />
                    <MainAside videos={filteredVideos} />
                </section>
            </>
        );
    }
}


export default MainPage;
