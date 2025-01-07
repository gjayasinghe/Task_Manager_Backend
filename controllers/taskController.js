const taskService = require('../services/taskService');

exports.getAllTasks = async (req, res, next) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.status(200).json(tasks);
  } catch (err) {
    next(err); 
  }
};

exports.createTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const newTask = await taskService.createTask(title, description);
    res.status(201).json(newTask);
  } catch (err) {
    next(err);
  }
};

exports.updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatedTask = await taskService.updateTask(id, title, description);
    res.status(200).json(updatedTask);
  } catch (err) {
    next(err);
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    await taskService.deleteTask(id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
