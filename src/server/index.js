var path = require('path')
const dotenv = require('dotenv');
dotenv.config();

const express = require('express')
const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var cors = require('cors');
app.use(cors());

app.use(express.static('dist'))
const port = 8080;


app.get('/getResult', function (req, res) {
    res.sendFile('index.html', { root: 'dist'});
})

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`Example app listening on port ${port}...`)
})


app.post('/postResult', calling)

async function calling(req, res) {

    const url = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${req.body.inputUrl}&lang=auto`;
    const response = await fetch(url);

    try {
        const data = await response.json();
            res.send(data);

    } catch (error) {
        console.error(error)
    }
}