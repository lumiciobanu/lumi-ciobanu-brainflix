import React from 'react';
import '../Upload/Upload.scss';
import VideoThumb from '../../assets/images/Upload-video-preview.jpg';
import UploadNewStatusForm from '../UploadNewStatusForm/UploadNewStatusForm';


class Upload extends React.Component {
    state = {
        statusList: [
          'status two',
          'status one'
        ]
      }
    
      addNewStatus = (status) => {
        if (!!status) {
            
          let newList = this.state.statusList.slice();
    
          newList.unshift(status)
    
          this.setState({
            statusList: newList
          });
        }
      }

    render() {
    return (
        <section className="upload">
            <div className="upload__container">

                <div className="upload__header">
                    <h1 className="upload__title">Upload Video</h1>
                </div>
                <div className="upload__content">
                    <div className="upload__videobox">
                        <div>
                            <p className="upload__label">Video Thumbnail</p>
                            <img className="upload__thumbnail" src={VideoThumb} alt="Video Thumbnail" />
                        </div>
                    </div>
                    <div class="upload__formbox">
                    <UploadNewStatusForm submitHandler={this.addNewStatus} />
                    </div>
                </div>

                <div className="upload__cta">
                    <button className="upload__cancel">Cancel</button>
                    <button className="upload__publish">Publish</button>
                </div>




            </div>
        </section>
    );
}
}

export default Upload;

