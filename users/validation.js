const Joi = require('@hapi/joi');
const JoiValidatorHelper = require('../utility/joi.validator.helper');
const JoiHelper = new JoiValidatorHelper();

JoiHelper.handle("addUser", "INVALID_NAME_FORMAT", Joi.object({
  name: Joi.string().optional(),
  number: Joi.number().min(1).allow(null).required(),
}).unknown(false)
);



module.exports = JoiHelper.validator