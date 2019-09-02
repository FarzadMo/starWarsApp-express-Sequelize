var path = require("path");

var Character = require("./../model/character");

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/view.html"));
    });

    app.get("/add", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/add.html"));
    });

    app.get("/all", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/all.html"));
    });

};