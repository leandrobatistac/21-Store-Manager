const Joi = require('joi');
const saleSchema = require('../joi/schema');

const bodyValidator = (req, res, next) => {
  const { body } = req;
  const salesArraySchema = Joi.array().items(saleSchema);
  const { error } = salesArraySchema.validate(body);

  if (error) {
    if (error.details[0].type === 'number.min') {
    return res.status(422).json({ message: error.message });
    }

    if (error.details[0].type === 'any.required') {
    return res.status(400).json({ message: error.message });
    }
  }

  next();
};

module.exports = {
  bodyValidator,
};
