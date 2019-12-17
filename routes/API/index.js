const router = require("express").Router();
const fitnessRoutes = require("./Tracker");


router.use("/workout", fitnessRoutes);

module.exports = router;
