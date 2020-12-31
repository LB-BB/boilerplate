const router = require("express").Router();

// matches GET requests to /api/puppies/
router.get("/", function (req, res, next) {
  /* etc */
});
// matches POST requests to /api/puppies/
router.post("/", function (req, res, next) {
  /* etc */
});
// matches PUT requests to /api/puppies/:prisonerId
router.put("/:prisonerId", function (req, res, next) {
  /* etc */
});
// matches DELETE requests to /api/puppies/:prisonerId
router.delete("/:prisonerId", function (req, res, next) {
  /* etc */
});

module.exports = router;
