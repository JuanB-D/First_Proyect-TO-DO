import { v4 as uuidv4 } from 'uuid';
import fs from 'fs/promises';
import { DB } from '../utils/path.utils.js';
import { getData } from '../utils/path.utils.js';

const TaskModel = async (params) => {
    try {
        const jsonData = await getData();
        const newTask = {
            id: uuidv4(),
            title: params.title,
            desctiption: params.desctiption,
            status: params.status,
            createAt: new Date(),
            dueDate: params.dueDate,
            priority: params.priority,
            tags: [params.tags],
            note: params.note
        }

        jsonData.Tasks.push(newTask);

        await fs.writeFile(DB, JSON.stringify(jsonData, null, 2), {encoding: 'utf8'})
    }
    catch(err){
        throw new Error('error in task.model', err)
    }
}


export default TaskModel;