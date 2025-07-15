let tasks = require('../models/tasks');

// @desc Get all Tasks
// @route GET /task
const getAllTasks = (req, res) => {

    try {
        return res.status(200).json(tasks);
    } catch (err) {
        return res.status(500).json({ message: 'Failed to retrieve tasks', error: err.message });
    }
};

// @desc Get a Task
// @route GET /task/:id
const getTask = (req, res) => {

    try {
        const task = tasks.find(task => task.id === req.params.id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        return res.status(200).json(task);
    } catch (err) {
        return res.status(500).json({ message: 'Error retrieving task', error: err.message });
    }
};

// @desc Create a Task
// @route POST /task
const createTask = (req, res) => {

    try {
        const { id, title, description } = req.body;

        if (!id || !title || !description) {
        return res.status(400).json({ message: 'All fields are required' });
        }

        const task = {
            id,
            title,
            description,
            isCompleted: false,
            createdAt: new Date()
        };

        tasks.push(task);

        return res.status(201).json(task);
    } catch (err) {
        return res.status(500).json({ message: 'Failed to create task', error: err.message });
    }
    
};

// @desc Mark Task as completed
// @route PATCH /task/:id
const completeTask = (req, res) => {

    try {
        const task = tasks.find(task => task.id === req.params.id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        task.isCompleted = !task.isCompleted;

        return res.status(200).json(task);
    } catch (err) {
        return res.status(500).json({ message: 'Failed to update task', error: err.message });
    }
};

// @desc Delete Task
// @route DELETE /task/:id
const deleteTask = (req, res) => {

    try {
        const task = tasks.find(task => task.id === req.params.id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        tasks = tasks.filter(task => task.id !== req.params.id);

        return res.status(200).json({ message: 'Task deleted' });
    } catch (err) {
        return res.status(500).json({ message: 'Failed to delete task', error: err.message });
    }
};

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    completeTask,
    deleteTask
}