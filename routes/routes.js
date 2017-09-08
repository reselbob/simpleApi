'use strict';
const factory = require('../data/dataFactory');
const appRouter = function(app) {

    app.get("/lists", function(req, res) {
        const lst = factory.getList();
        res.send(JSON.stringify(lst));
    });

    app.get("/lists/:name", function(req, res) {
        const name = req.params.name;
        const lst = factory.getList(name);
        res.send(JSON.stringify(lst));
    });
}

module.exports = appRouter;