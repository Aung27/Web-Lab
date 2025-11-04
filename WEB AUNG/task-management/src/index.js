const express = require('express');
const app = express();
const port = 3000;

// Import tasks router
const tasksRouter = require('./routes/tasks');

// Root route
app.get('/', (req, res) => {
  res.send('Task Management API is running!');
});

// Health route
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', uptime: process.uptime() });
});

// Mount tasks router
app.use('/', tasksRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
