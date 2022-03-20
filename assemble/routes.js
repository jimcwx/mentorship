const router = require("express").Router();
const controller = require("./controller");

router
  .route('/')
  .post(controller.assembleParts)

module.exports = router;