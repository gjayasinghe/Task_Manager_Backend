const { body, validationResult } = require('express-validator');

const taskValidationRules = [
  body('title')
    .isString()
    .withMessage('Title must be a string')
    .isLength({ min: 3, max: 50 })
    .withMessage('Title must be between 3 and 50 characters')
    .notEmpty()
    .withMessage('Title is required'),
  body('description')
    .isString()
    .withMessage('Description must be a string')
    .isLength({ max: 255 })
    .withMessage('Description must not exceed 255 characters')
    .notEmpty()
    .withMessage('Description is required'),
];

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: errors.array().map((err) => `${err.param}: ${err.msg}`),
    });
  }
  next();
};

module.exports = { taskValidationRules, validateRequest };
