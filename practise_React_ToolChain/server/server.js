/**
 * Created by Xu on 16/5/4.
 */
var express = require('express');
var path = require("path");

var app = express();

app.use(express.static(path.join(__dirname,"../app/public")));


var server = app.listen(3000,function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s',host,port);
});