const db = require('../models/db');

const TaskDAO = {
  getAllTasks: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM tasks', (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
  },
  createTask: (title, description) => {
    return new Promise((resolve, reject) => {
      db.query(
        'INSERT INTO tasks (title, description) VALUES (?, ?)',
        [title, description],
        (err, results) => {
          if (err) reject(err);
          else resolve({ id: results.insertId, title, description });
        }
      );
    });
  },
  updateTask: (id, title, description) => {
    return new Promise((resolve, reject) => {
      db.query(
        'UPDATE tasks SET title = ?, description = ? WHERE id = ?',
        [title, description, id],
        (err, results) => {
          if (err) reject(err);
          else resolve({ id, title, description });
        }
      );
    });
  },
  deleteTask: (id) => {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM tasks WHERE id = ?', [id], (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
  },
};

module.exports = TaskDAO;
