const express = require("express");
const router = express.Router();
const locationController = require("../controllers/location");
const chartController = require("../controllers/chart");

router.get("/location", locationController.get);
router.get("/chart", chartController.get);

module.exports = router;
