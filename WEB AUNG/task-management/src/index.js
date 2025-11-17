
const express = require('express');
const taskRouter = require('./routes/tasks');

const app = express();
const port = 3000;


const tasks = [
  { id: 1, title: 'Sample Task', completed: false }
];


app.locals.tasks = tasks;


app.use(express.json());


app.get('/', (req, res) => {
  res.send('Task Management API is running!');
});


app.get('/health', (req, res) => {
  res.json({ status: 'healthy', uptime: process.uptime() });
});

app.use('/tasks', taskRouter);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
