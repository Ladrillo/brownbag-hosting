// EXPRESS CONFIGURATION FILE

var environment = process.env.NODE_ENV,
    config = require('./config'),

    // middleware
    express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session');


module.exports = function () {

    var app = express();

    // this middleware will run no matter the environment
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));

    // environment dependant middleware
    if (environment === 'development') {
        var morgan = require('morgan');
        app.use(morgan('dev'));
    }

    // static assets folder (angular app)
    app.use(express.static('./public'));

    return app;
};