const taskDAO = require('../daos/taskDao');

exports.getAllTasks = () => {
  return taskDAO.getAllTasks();
};

exports.createTask = (title, description) => {
  return taskDAO.createTask(title, description);
};

exports.updateTask = (id, title, description) => {
  return taskDAO.updateTask(id, title, description);
};

exports.deleteTask = (id) => {
  return taskDAO.deleteTask(id);
};
