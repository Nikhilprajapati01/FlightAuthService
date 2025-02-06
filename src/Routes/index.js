const v1apirouter = require("./v1/index");

const express = require('express');

const router = express.Router();

router.use("/v1", v1apirouter)

module.exports = router;

