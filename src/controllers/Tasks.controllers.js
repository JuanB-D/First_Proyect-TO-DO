import TaskServices from "../services/Task.services.js";
import { ExistParams } from "../handlers/ExistParam.handler.js";

const TasksController = {
    addNewTask: async (req, res) => {
        try {
            const { title, description, dueDate, priority, tags, note } = req.body; 
            ExistParams([title, description, dueDate, priority, tags, note]);

            await TaskServices.addNewTask({ title, description, dueDate, priority, tags, note });

            res.status(201).send({ message: 'Task created successfully', status: 'OK', title:title});
        } catch (error) {
            res.status(400).send({ message: 'Failed request', status: 'FAILED', error: error.message });
        }
    },

    getTask: async (req, res) => {
        try {
            const title = req.params.title;
            ExistParams([title]);

            const data = await TaskServices.getTask(title);

            res.status(200).send({ message: 'Data sent OK', status: 'OK', data });
        } catch (error) {
            res.status(400).send({ message: 'Failed request', status: 'FAILED', error: error.message });
        }
    },

    getAllTasks: async (req, res) => {
        try {
            const data = await TaskServices.getAllTasks();

            res.status(200).send({ message: 'Data sent OK', status: 'OK', data });
        } catch (error) {
            res.status(400).send({ message: 'Failed request', status: 'FAILED', error: error.message });
        }
    },

    updateTask: async (req, res) => {
        try {
            const title = req.params.title;
            const { update } = req.body;
            ExistParams([title, update]);

            await TaskServices.updateTask({ title, update });

            res.status(200).send({ message: 'Task updated successfully', status: 'OK' });
        } catch (error) {
            res.status(400).send({ message: 'Failed request', status: 'FAILED', error: error.message });
        }
    },

    deleteTask: async (req, res) => {
        try {
            const title = req.params.title;
            ExistParams([title]);

            await TaskServices.deleteTask(title);

            res.status(204).send('ok');
        } catch (error) {
            res.status(400).send({ message: 'Failed request', status: 'FAILED', error: error.message });
        }
    }
};

export default TasksController;
