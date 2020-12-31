const router = require("express").Router();

router.use("/prisons", require("./prisons")); // matches all requests to  /api/prisons/
router.use("/prisoners", require("./prisoners")); // matches all requests to  /api/prisoners/

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
