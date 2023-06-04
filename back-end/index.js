var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(err, req, res, next) {
    res.status(500).send(err);
});

app.get('/', (req, res) => {
    res.send('<h1> Welcome To Job Portal System! </h1>');
});

app.listen(process.env.PORT || 666, () => {
    console.log('Starting Backend Server');
});


