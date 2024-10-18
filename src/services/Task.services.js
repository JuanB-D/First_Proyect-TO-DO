import fs from 'fs/promises';
import { DB, getData } from '../utils/path.utils.js';
import TaskModel from '../db/task.model.js';

const TaskServices = {
    addNewTask: async (params) => {
        try {
            await TaskModel(params);
        } catch (error) {
            throw new Error(`Failed to add new task: ${error.message}`);
        }
    },

    getTask: async (title) => {
        try {
            const jsonData = await getData();
            const taskFound = jsonData.Tasks.find(task => task.title === title);

            if (!taskFound) {
                throw new Error('Task not found');
            }

            return taskFound;
        } catch (error) {
            throw new Error(`Failed to get task: ${error.message}`);
        }
    },

    getAllTasks: async () => {
        try {
            const jsonData = await getData();
            return jsonData.Tasks;
        } catch (error) {
            throw new Error(`Failed to get all tasks: ${error.message}`);
        }
    },

    updateTask: async (params) => {
        try {
            const jsonData = await getData();
            const taskIndex = jsonData.Tasks.findIndex(task => task.title === params.title);

            if (taskIndex === -1) {
                throw new Error('Task not found');
            }

            jsonData.Tasks[taskIndex] = {
                ...jsonData.Tasks[taskIndex],
                ...params.update
            };

            await fs.writeFile(DB, JSON.stringify(jsonData, null, 2), { encoding: 'utf8' });
        } catch (error) {
            throw new Error(`Failed to update task: ${error.message}`);
        }
    },

    deleteTask: async (title) => {
        try {
            const jsonData = await getData();
            const taskIndex = jsonData.Tasks.findIndex(task => task.title === title);

            if (taskIndex === -1) {
                throw new Error('Task not found');
            }

            jsonData.Tasks.splice(taskIndex, 1);
            await fs.writeFile(DB, JSON.stringify(jsonData, null, 2), { encoding: 'utf8' });
        } catch (error) {
            throw new Error(`Failed to delete task: ${error.message}`);
        }
    }
};

export default TaskServices;
