const service = require("./service");
const validator = require("./validation");

const controller = {
  assembleParts: async (req, res, next) => {
    try {
      await validator.assembleParts(req.body);
      console.log(req.body);
      const result = await service.assembleParts(req.body);
      res.send(`The total time needed to assemble the parts is, ${result}`);
    } catch (e) {
      next(e);
    }
  },
};

module.exports = controller;
