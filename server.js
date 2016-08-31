var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var sanitizeHtml = require("sanitize-html")
var mongoose = require("mongoose");

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"./client")));

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(8000,function(){
	console.log("haha 8000");
})