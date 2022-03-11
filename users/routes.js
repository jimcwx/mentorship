const router = require("express").Router();
const controller = require("./controller");

router.route('/', controller.getUser);

module.exports = router;