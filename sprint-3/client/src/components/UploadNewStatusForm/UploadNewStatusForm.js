import React from 'react';
// import '../Upload/Upload.css';


class UploadNewStatusForm extends React.Component {
    submitHandler = (e) => {
        e.preventDefault();

        this.props.submitHandler(e.target.newStatus.Inp.value);

        e.target.reset();
    }

    render() {
        return (

            <form id="UploadForm" className="Upload__form" onSubmit={this.submitHandler}>
                <label className="upload__label" name="yourlabel" for="upload">Title Your Video</label>
                <textarea className="comments__textarea" id="subject" name="subject" placeholder="Add a title to your video" />
                <label className="upload__label" name="yourlabel" for="upload">Add a video description</label>
                <textarea className="comments__textarea" id="subject" name="subject" placeholder="Add a description of your video" />
            </form>
        );
    }
};

export default UploadNewStatusForm;