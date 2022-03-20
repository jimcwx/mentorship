const Joi = require("@hapi/joi");
const JoiValidatorHelper = require("../utility/joi.validator.helper");
const JoiHelper = new JoiValidatorHelper();

JoiHelper.handle(
  "assembleParts",
  "INVALID_PROPERTIES_IN_REQUEST_BODY",
  Joi.object({
    numOfParts: Joi.number().required(),
    parts: Joi.array().items(Joi.number()).min(1),
  }).unknown(false)
);

module.exports = JoiHelper.validator;
