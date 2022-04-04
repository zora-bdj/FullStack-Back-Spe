// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function (req, res) {
    res.render('index');
});

app.get("/showmodalroute", function (req, res) {
    res.render('partial/component', {
        list: [
            "test",
            "test2",
            "test3",
            "test4"
        ]
    });
});
app.get("/showmodalroute2", function (req, res) {
    res.render('partial/component', {
        list: [
            "test5",
            "test6",
            "test7",
            "test8"
        ]
    });
});

app.listen(8080);