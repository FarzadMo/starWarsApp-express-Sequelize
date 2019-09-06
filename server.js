var express = require("express");

var PORT = process.env.PORT || 8081;
var app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(express.static("./app/public"));

require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes.js")(app);

app.listen(PORT, function () {
    console.log("Server is connected on https://localhost/" + PORT);
});