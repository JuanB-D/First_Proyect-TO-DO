import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const DB = path.join(__dirname, '../db/Tasks.json');

export const getData = async () => {
    try {
        const data = await fs.readFile(DB, 'utf8');
        const jsonData = JSON.parse(data);


        if (!jsonData.Tasks) {
            throw new Error('Invalid data structure: "Tasks" array is missing.');
        }

        return jsonData;
    } catch (err) {
        throw new Error(`Error reading the JSON file: ${err.message}`);
    }
};
