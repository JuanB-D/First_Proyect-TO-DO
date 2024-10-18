import { fileURLToPath} from 'url';
import { dirname } from 'path';
import path from 'path';
import fs from 'fs/promises';

 const __filename = fileURLToPath(import.meta.url);
 const __dirname = dirname(__filename);
 export const DB = path.join(__dirname, '../db/Tasks.json');

export const getData = async() =>{
    try{
        const data = await fs.readFile(DB, 'utf8');
        const jsonData = JSON.parse(data)
        return jsonData;
    }
    catch(err){
        throw new Error('error reading the json file', err);
    }
}

 