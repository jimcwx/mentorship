const router = require("express").Router();
const controller = require("./controller");

router.get('/', controller.getUser);

module.exports = router;