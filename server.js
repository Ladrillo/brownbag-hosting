process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var port = process.env.PORT || 5000;

var app = require('./server/express')();

app.listen(port, function () {
    console.log('listening on ' + port);
});