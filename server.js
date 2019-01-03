var express = require("express");
var path = require("path");


var app = express();
var PORT = 8000;

app.use(express.static("app/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log("App listening on Port: " + PORT);
})