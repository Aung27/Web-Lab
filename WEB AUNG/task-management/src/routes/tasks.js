// src/routes/tasks.js
const express = require('express');
const router = express.Router();

// Sample tasks (same as before)
const tasks = [
  { id: 1, title: 'Learn Node.js',    completed: false, priority: 'medium', createdAt: new Date('2025-01-10T10:00:00Z') },
  { id: 2, title: 'Build REST API',   completed: false, priority: 'high',   createdAt: new Date('2025-02-01T12:30:00Z') },
  { id: 3, title: 'Write README',     completed: false, priority: 'low',    createdAt: new Date('2025-03-05T09:15:00Z') },
  { id: 4, title: 'Test with Postman',completed: false, priority: 'high',   createdAt: new Date('2025-03-20T16:45:00Z') },
  { id: 5, title: 'Commit to Git',    completed: false, priority: 'medium', createdAt: new Date('2025-04-01T08:00:00Z') },
];

// Helper function to validate ID
function isPositiveInteger(str) {
  return /^\d+$/.test(String(str));
}

// GET /tasks → return all tasks
router.get('/tasks', (req, res) => {
  res.json(tasks);
});

// GET /task/:id → return one task or error
router.get('/task/:id', (req, res) => {
  const rawId = req.params.id;

  if (!isPositiveInteger(rawId)) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  const id = Number(rawId);
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  res.json(task);
});

module.exports = router;
