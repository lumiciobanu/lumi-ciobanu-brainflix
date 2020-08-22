import React from 'react';
import HeroFeatured from '../HeroFeatured/HeroFeatured';
import MainLeft from '../MainLeft/MainLeft';
import MainAside from '../MainAside/MainAside';
import './MainPage.scss';
import videoImg0 from '../../assets/images/video-list-0.jpg';
import commentsImg from '../../assets/images/Mohan-muruge.jpg';
import axios from 'axios';


const URL = 'http://localhost:8080';


class MainPage extends React.Component {
  
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
