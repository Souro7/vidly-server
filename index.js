const express = require('express');
const mongoose = require('mongoose');

const genres = require('./routes/genres');

const app = express();

mongoose.connect('mongodb://localhost/vidly')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(() => console.log('Error connecting to DB..'));

app.use(express.json());
app.use('/api/genres', genres);



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}...`));
