const express = require("express");
const router = express.Router();
const apiController = require("../controllers/api");

router.get("/", apiController.get);
// router.post("/", accountController.post);

module.exports = router;
