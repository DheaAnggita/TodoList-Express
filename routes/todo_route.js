// routes/todoRoutes.js
const express = require('express');
const todoController = require('../controllers/todo_controller');
const authenticateToken = require('../middlewares/auth_middleware');

const router = express.Router();



router.get('/', authenticateToken, todoController.getAllTodos);
router.get('/:id', authenticateToken, todoController.getTodoById);
router.post('/', authenticateToken, todoController.createTodo);
router.put('/:id', authenticateToken, todoController.updateTodo);
router.delete('/', authenticateToken, todoController.deleteAllTodos);
router.delete('/:id', authenticateToken, todoController.deleteTodo);

module.exports = router;
