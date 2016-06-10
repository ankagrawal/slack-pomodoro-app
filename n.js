var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = 8000;
var hostname = '127.0.0.1';

app.use(bodyParser());
//app.use(app.router);

app.use(function (req, res, next) {
    console.log(req.body);
    /*
    var body = [];
    req.on('data', function(chunk) {
        body.push(chunk);
    }).on('end', function() {
        body = Buffer.concat(body).toString();
        // at this point, `body` has the entire request body stored in it as a string
    });
    console.log(body);
    */
    //console.log(req);
    if(req.method == 'POST') {
        console.log('server called, POST');
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello Node!\n');
    } else {
        console.log('server called, GET');
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello Get!\n');
    }
})

//var server = http.createServer(app);

app.listen(port, hostname, function() {
    console.log('server listening');
});


