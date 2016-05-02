/**
 * Created by Xu on 16/5/2.
 */
var express = require('express');
var app = express();

app.get('/',function (req, res) {
    res.send('Hello World Express');
});

var server = app.listen(3000,function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s',host,port);
});