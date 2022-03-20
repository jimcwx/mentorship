const router = require("express").Router();
const controller = require("./controller");

router
  .route('/')
  .get(controller.getUser)
  .post(controller.addUser)





module.exports = router;