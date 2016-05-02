var mongoose = require("mongoose");

exports.connect = function (request, response) {
    mongoose.connect("mongodb://localhost/myapp",function (e) {
        if (e) response.send(e.message);
        response.send('connect yes!');
    })
}
