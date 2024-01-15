const express = require('express');
const app = express();
const routes = require('./routes/user_route');
const todoRoutes = require('./routes/todo_route');

// ...

app.use(express.json());
app.use('/users', routes); // Set up your routes under '/api'
app.use('/todos', todoRoutes);

// ...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
