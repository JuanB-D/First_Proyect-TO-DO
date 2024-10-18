import fs from 'fs/promises'
import { DB } from '../utils/path.utils.js'
import { getData } from '../utils/path.utils.js'
import TaskModel from '../db/task.model.js'


const TaskServices = {
    addNewTask: async (params) => {
        try {

            await TaskModel(params)
        }
        catch (error) {
            throw new Error(error)
        }
    },

    getTask: async (title) => {
        try {

            const jsonData = await getData();
            const taskFound = jsonData.Tasks.find(task => task.title === title);

            if(!taskFound){
                throw new Error('task dont found');
            }

            return taskFound;

        } catch (error) {
            throw new Error(error)
        }
    },

    getAllTasks: async () => {
        try {
            const jsonData = await getData();

            const allTasks = [];

            jsonData.Tasks.forEach(task => {
                allTasks.push(task)
            });

            return allTasks

        } catch (error) {
            throw new Error(error)
        }
    },

    updateTask: async (params) => {
        try{

            const jsonData = await getData();

            const taskToUpdate = jsonData.Tasks.findIndex(task => task.title === params.title);
            if(taskToUpdate === -1){
                throw new Error('task dont found')
            }
            const taskUpdated = {
                ...jsonData.Tasks[taskToUpdate],
                ...params.update
            }

            jsonData.Tasks[taskToUpdate] = taskUpdated;

            await fs.writeFile(DB, JSON.stringify(jsonData, null, 2), {encoding: 'utf8'})
        }
        catch(error){
            throw new Error(error)
        }
    },
    deleteTask: async (title) =>{
        try{
            const jsonData = await getData();
            const taskToDelete = jsonData.Tasks.findIndex(task => task.title === title);

            jsonData.Tasks.splice(taskToDelete, 1);

            await fs.writeFile(DB, JSON.stringify(jsonData, null, 2), {encoding: 'utf8'})
        }
        catch(error){
            throw new Error(error)
        }
    }
}

export default TaskServices;