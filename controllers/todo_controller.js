// controllers/todoController.js
const { Todo } = require('../models');

exports.getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.findAll({ where: { user_id: req.user.userId } });
        res.json(todos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.getTodoById = async (req, res) => {
    try {
      const id = req.params.id; // Assuming the todo ID is in the URL parameters
  
      const todo = await Todo.findByPk(id);
  
      if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
      }
  
      return res.status(200).json(todo);
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };

exports.createTodo = async (req, res) => {
    try {
        const { task, deadline } = req.body;
        const user_id = req.user.userId;

        const todo = await Todo.create({ task, deadline, status: false, user_id });
        console.log(req.user)
        res.status(201).json(todo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { task, deadline, status } = req.body;

        const todo = await Todo.findOne({ where: { user_id: req.user.userId, id:id } });

        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        todo.task = task;
        todo.deadline = deadline;
        todo.status = status;
        await todo.save();

        res.json(todo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;

        const todo = await Todo.findByPk(id);

        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        await todo.destroy();

        res.json({ message: 'Todo deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.deleteAllTodos = async (req, res) => {
    try {
      // Assuming you have some logic for authentication and authorization before deleting all todos
  
      // Delete all todos
      await Todo.destroy({
        where: {}, // empty where condition to delete all records
      });
  
      return res.status(200).json({ message: 'All todos deleted successfully' });
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
