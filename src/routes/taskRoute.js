const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/', taskController.getAllTasks);
router.get('/:id', taskController.getTask);
router.post('/', taskController.createTask);
router.patch('/:id', taskController.completeTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;