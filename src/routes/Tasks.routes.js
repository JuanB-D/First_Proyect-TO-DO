import express from 'express';
const TaskRoutes = express.Router();
import TasksController from '../controllers/Tasks.controllers.js';

import { apiKeyMiddleware } from '../middlewares/Authent.key.js';

TaskRoutes
    .post('/tasks', apiKeyMiddleware, TasksController.addNewTask)
    .get('/tasks:title', apiKeyMiddleware, TasksController.getTask)
    .get('/taskss', apiKeyMiddleware, TasksController.getAllTasks)
    .patch('/tasks/:title', apiKeyMiddleware, TasksController.updateTask)
    .delete('/tasks/:title', apiKeyMiddleware, TasksController.deleteTask)


export default TaskRoutes;