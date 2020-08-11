import React from 'react';
import '../Upload/Upload.scss';
import VideoThumb from '../../assets/images/Upload-video-preview.jpg';

function Upload(props) {
    return (
        <section className="Upload">
            <div className="Upload__container">

                <div className="Upload__header">
                    <h1 className="Upload__title">Upload Video</h1>
                </div>
                <div className="Upload__content">
                    <div className="Upload__videobox">
                        <div>
                            <p className="Upload__label">Video Thumbnail</p>
                            <img className="Upload__thumbnail" src={VideoThumb} alt="Video Thumbnail" />
                        </div>
                    </div>
                    <div class="Upload__formbox">
                        <div>
                            <p className="Upload__label">Title Your Video</p>
                        </div>
                        <form id="UploadForm" className="Upload__form">
                            <label className="Upload__label" name="yourlabel" for="upload"></label>
                            <textarea className="comments__textarea" id="subject" name="subject" placeholder="Add a title to your video" />
                            <textarea className="comments__textarea" id="subject" name="subject" placeholder="Add a description of your video" />
                        </form>
                    </div>
                </div>

                <div className="Upload__cta">
                <button className="Upload__cancel">Cancel</button>
                <button className="Upload__publish">Publish</button>
                </div>




            </div>
        </section>
    );
}

export default Upload;