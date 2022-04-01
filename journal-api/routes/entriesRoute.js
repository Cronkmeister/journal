const router = require("express").Router();
const entriesController = require("../controllers/entriesController");

router.route("/").get(entriesController.index).post(entriesController.addEntry);

router
  .route("/:id")
  .get(entriesController.singleEntry)
  .put(entriesController.updateEntry)
  .delete(entriesController.deleEntry);

module.exports = router;
