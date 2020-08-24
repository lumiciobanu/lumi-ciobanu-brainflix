const express = require('express');
// const { v4: uuidv4 } = require('uuid');
const app = express(); 
const videoRoutes = require('./routes/videos');
const cors = require('cors');

require('dotenv').config()
const PORT = process.env.PORT;
console.log(PORT)
// console.log(BACKEND_URL)

// app.use((req, res, next) => {
//     next();
// } );

app.use(cors());
app.use(express.json());
app.use('/videos', videoRoutes);


// start Express on port 8080
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
    
});

