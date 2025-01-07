const { param } = require('express-validator');

const idValidationRule = [
  param('id')
    .isInt({ min: 1 })
    .withMessage('ID must be a positive integer'),
];

module.exports = { idValidationRule };
