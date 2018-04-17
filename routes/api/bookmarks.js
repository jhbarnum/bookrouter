const router = require("express").Router();
const bookmarksController = require("../../controllers/bookmarksController");

// Matches with "/api/books"
router.route("/")
  .get(bookmarksController.findAll)
  .post(bookmarksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(bookmarksController.findById)
  .put(bookmarksController.update)
  .delete(bookmarksController.remove);

module.exports = router;
