const express = require('express');
const taskController = require('../controllers/taskController');
const { taskValidationRules, validateRequest } = require('../validations/taskValidation');
const { idValidationRule } = require('../validations/idValidation');

const router = express.Router();

router.get('/', taskController.getAllTasks);
router.post('/', taskValidationRules, validateRequest, taskController.createTask);
router.put('/:id', idValidationRule, validateRequest, taskValidationRules, validateRequest, taskController.updateTask);
router.delete('/:id', idValidationRule, validateRequest, taskController.deleteTask);

module.exports = router;