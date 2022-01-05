const express = require("express");
const router = express.Router();

const apiController = require("../controllers/apiController");

router.post("/virustotal/v3", apiController.virustotal);

module.exports = router;
