const router = require("express").Router();
const trackerController = require("../../controllers/fitTrackerCon");

router.route("/")
  .get(trackerController.findAll)
  .post(trackerController.create);

router
  .route("/:id")
  .get(trackerController.findById)
  .put(trackerController.update)
  .delete(trackerController.remove);

module.exports = router;
