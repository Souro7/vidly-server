const express = require('express');
const Joi = require('joi');

const app = express();
app.use(express.json());


const genres = [
    {id: 1, name: 'Comedy'},
    {id: 2, name: 'Thriller'},
    {id: 3, name: 'Fantasy'},
];

app.get('/api/genres', (req, res) => {
    res.send(genres);
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}...`));
