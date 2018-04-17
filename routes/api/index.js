const router = require("express").Router();
const bookmarkRoutes = require("./bookmarks");

// Book routes
router.use("/bookmarks", bookmarkRoutes);

module.exports = router;
