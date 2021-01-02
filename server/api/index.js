const router = require("express").Router();

router.use("/apples", require("./apples")); // matches all requests to  /api/apples/
router.use("/oranges", require("./oranges")); // matches all requests to  /api/oranges/

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
