/**
 * Created by Xu on 16/4/30.
 */
var express = required("express");
var app = express();
var routes=require("./routes/index.js");
app.listen(2014);

app.get("/connect",routes.connect);