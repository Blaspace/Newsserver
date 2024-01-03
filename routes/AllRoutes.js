const express = require("express");
const handleBusiness = require("../controlers/handleBusiness");
const handleHealth = require("../controlers/handleHealth");
const handlesports = require("../controlers/handleSports");
const handleworld = require("../controlers/handleWorld");
const handlepolitics = require("../controlers/handlePolitics");
const handleEntertainment = require("../controlers/handleEntertainment");
const handleOpinion = require("../controlers/handleOpinion");
const handleStyle = require("../controlers/handleStyle");
const handleGetSingleNews = require("../controlers/handleGetSingleNews");
const handleHome = require("../controlers/handleHome");

const router = express.Router();

router.post("/single", handleGetSingleNews);

router.get("/home", handleHome);

router.get("/business", handleBusiness);

router.get("/health", handleHealth);

router.get("/world", handleworld);

router.get("/politics", handlepolitics);

router.get("/sport", handlesports);

router.get("/opinion", handleOpinion);

router.get("/opinion", handleOpinion);

router.get("/style", handleStyle);

router.get("/entertainment", handleEntertainment);

module.exports = router;
