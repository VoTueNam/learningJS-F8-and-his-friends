//require các function router here
const test = require("./test");
const routeAPI = require("./routeAPI");

function route(app) {
    app.use("/api/3block/system", routeAPI);
    app.use("/test", test);
}

module.exports = route;
