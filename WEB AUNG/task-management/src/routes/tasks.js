// src/routes/tasks.js
const express = require('express');
const router = express.Router();

// Helper: Validate positive integer
function isPositiveInteger(str) {
  return /^\d+$/.test(String(str));
}

// GET /tasks → return all 5 tasks
router.get('/tasks', (req, res) => {
  const tasks = req.app.locals.tasks;
  res.status(200).json({
    success: true,
    data: tasks
  });
});

// GET /task/:id → return task by ID
router.get('/task/:id', (req, res) => {
  const rawId = req.params.id;

  // 400 → invalid ID format (e.g., abc, 12ab)
  if (!isPositiveInteger(rawId)) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  const id = Number(rawId);
  const tasks = req.app.locals.tasks;
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  return res.json(task);
});

module.exports = router;
