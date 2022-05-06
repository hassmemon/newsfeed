if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const axios = require('axios');
const PORT =
    process.env.PORT || (process.env.NODE_ENV === 'production' && 3000) || 3001;
const app = express();
const path = require('path');
app.set('trust proxy', 1);
app.use(express.json()); // support json encoded bodies

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

app.get('/api/news/top-headlines', (req, res) => {
    axios
        .get(
            `https://newsapi.org/v2/top-headlines?sources=${req.query.sources}&apiKey=${process.env.REACT_APP_API_KEY}`
        )
        .then((response) => {
            res.json(response.data);
        });
});

app.get('/api/news/everything', (req, res) => {
    axios
        .get(
            `https://newsapi.org/v2/everything?q=${req.query.q}&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`
        )
        .then((response) => {
            res.json(response.data);
        });
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

    app.get('/*', (req, res) => {
        res.sendFile(
            path.join(__dirname, '..', 'client', 'build', 'index.html')
        );
    });
}

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});
