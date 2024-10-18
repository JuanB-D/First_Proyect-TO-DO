import TaskServices from "../services/Task.services.js";
import { ExistParams } from "../handlers/ExistParam.handler.js";

const TasksController = {

    addNewTask: async (req, res) => {
        try {
            const { title, description, dueDate, priotity, tags, note } = req.body;
            ExistParams([title, description, dueDate, priotity, tags, note]);

            await TaskServices.addNewTask({title, description, dueDate, priotity, tags, note})

            res.status(201).send({ message: 'usser created succesfully', status: 'OK' })
        }
        catch (error) {
            res.status(400).send({ message: 'fail request', status: 'FAILED', err: error })
        }
    },

    getTask: async (req, res) => {
        try {
            const  title  = req.params.title;
            ExistParams([title]);

            const data = await TaskServices.getTask(title)

            res.status(200).send({ message: 'data send ok', status: 'OK', data: data})
        } catch (error) {
            res.status(400).send({ message: 'fail request', status: 'FAILED', err: error })
        }
    },

    getAllTasks: async (req, res) => {
        try {

            const data = await TaskServices.getAllTasks();

            res.status(200).send({ message: 'data send ok', status: 'OK' , data: data})
        } catch (error) {
            res.status(400).send({ message: 'fail request', status: 'FAILED', err: error })
        }
    },

    updateTask: async (req, res) => {
        try{
            const title = req.params.title;
            const { update } = req.body;
            ExistParams([title, update]);

            await TaskServices.updateTask({title, update})

            res.status(201).send({message:'updated succesfully', status:'OK'})
        }
        catch(error){
            res.status(400).send({message:'fail request', status: 'FAILED', err: error})
        }
    },
    deleteTask: async (req, res) =>{
        try{
            const title = req.params.title;
            ExistParams([title]);

            await TaskServices.deleteTask(title)

            res.status(200).send({message:'deleted succesfully', status:'OK'})
        }
        catch(error){
            res.status(400).send({message: 'fail request', status: 'FAILED', err: error})
        }
    }
}

export default TasksController;