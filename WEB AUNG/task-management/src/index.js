// src/index.js
const express = require('express');
const taskRouter = require('./routes/tasks');

const app = express();
const port = 3000;

// In-memory storage with 5 tasks (as per assignment)
const tasks = [
  { id: 1, title: 'Learn Node.js', completed: false, priority: 'medium', createdAt: new Date('2025-01-10T10:00:00Z') },
  { id: 2, title: 'Build REST API', completed: false, priority: 'high', createdAt: new Date('2025-02-01T12:30:00Z') },
  { id: 3, title: 'Write Documentation', completed: false, priority: 'low', createdAt: new Date('2025-03-05T09:15:00Z') },
  { id: 4, title: 'Test API Using Postman', completed: false, priority: 'high', createdAt: new Date('2025-03-20T16:45:00Z') },
  { id: 5, title: 'Commit to GitHub', completed: false, priority: 'medium', createdAt: new Date('2025-04-01T08:00:00Z') }
];

// Share task list across routes
app.locals.tasks = tasks;

// Middleware to parse JSON
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Task Management API is running!');
});

// Health route
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime()
  });
});

// Mount task router
app.use('/', taskRouter);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
