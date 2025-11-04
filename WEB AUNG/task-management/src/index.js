const express = require('express');
const app = express();
const port = 3000;

// Sample tasks
// src/routes/tasks.js (or inside src/index.js if not using router yet)
const tasks = [
  { id: 1, title: 'Learn Node.js',    completed: false, priority: 'medium', createdAt: new Date('2025-01-10T10:00:00Z') },
  { id: 2, title: 'Build REST API',   completed: false, priority: 'high',   createdAt: new Date('2025-02-01T12:30:00Z') },
  { id: 3, title: 'Write README',     completed: false, priority: 'low',    createdAt: new Date('2025-03-05T09:15:00Z') },
  { id: 4, title: 'Test with Postman',completed: false, priority: 'high',   createdAt: new Date('2025-03-20T16:45:00Z') },
  { id: 5, title: 'Commit to Git',    completed: false, priority: 'medium', createdAt: new Date('2025-04-01T08:00:00Z') },
];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});


// Root route
app.get('/', (req, res) => {
  res.send('Task Management API is running!');
});

// Tasks route
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
