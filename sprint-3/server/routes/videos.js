const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid'); 
const videosData = require('../data/data.json')


//GET /videos
router.get('/', (req, res) => {
    const videoDataList = videosData.map (video => {
        return {
            id: video.id,
            title: video.title,
            channel: video.channel,
            image: video.image
        }
    })

    res.status(200).json(videosData);
});

// //GET /vides/:videoId
router.get('/:videoId', (req, res) => {
    const currVideoId = req.params.videoId;
    const currVideo = videosData.find(video => video.id === currVideoId);

    if(!currVideo) {
        return res.status(400).json({ message: 'Video with this id not found '});
    }

    res.status(200).json(currVideo);
});


//POST /videos
router.post('/', (req, res) => {
    if (Object.keys(req.body).length === 0) {
        return res.status(400).json({message: 'Request body is not present' });
    }

const newVideo = {
    ...req.body,
    //add all properties, even hardcoded    
    id: uuidv4(),
    dateCreated: Date.now()
};

videosData.push(newVideo);

res.status(201).json(newVideo);

});




module.exports = router;