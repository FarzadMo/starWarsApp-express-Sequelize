var Character = require("./../model/character");

module.exports = function (app) {

        app.post("/api/new", function (req, res) {
            var character = req.body;

            var routeName = character.name.replace(/\s+/g, "").toLowerCase();

            character.create({
                routeName: routeName,
                name: character.name,
                role: character.role,
                age: character.age,
                forcePoints: character.forcePoints
            });

            res.status(204).end();
        });

        app.get("/api/:characters?", function (req, res) {
                    app.get("/api/:characters?", function (req, res) {
                        if (req.params.characters) {

                            Character.findOne({
                                where: {
                                    routeName: req.params.characters
                                }
                            }).then(function (result) {
                                return res.json(result);
                            });
                        } else {
                            Character.findAll().then(function (result) {
                                return res.json(result);
                            });
                        }
                    });

                };