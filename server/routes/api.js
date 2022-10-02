const express = require("express");
const router = express.Router();
const mapController = require("../controllers/map");
const sideBarLeftController = require("../controllers/sideBarLeft");
const navBarController = require("../controllers/navBar");

router.get("/map", mapController.get);
router.get("/sideBarLeft", sideBarLeftController.get);
router.get("/navBar", navBarController.get);

module.exports = router;
