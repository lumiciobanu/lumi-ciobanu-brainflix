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
                    <UploadNewStatusForm submitHandler={this.addNewStatus} />
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
}

export default Upload;

