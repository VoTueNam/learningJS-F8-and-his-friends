const express = require("express");
var cors = require("cors");
const app = express();
const route = require("./routers");
const port = 3000;
app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
