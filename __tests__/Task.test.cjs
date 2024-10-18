const request = require('supertest');
const app = require('../src/index');
let tasktitle;
describe('CRUD test', () =>{
    it('should create a new task', async () =>{
        const response = await request(app)
        .post('/api/tasks')
        .send({
            title: "Limpiar el pizo",
            description:"limpiar el pizo con la trapidora",
            status:"pending",
            dueDate:"30/03/2024",
            priority:"low",
            tags:["Clean", "LowImportance"],
            note:"lavar el trapiador despues de usarlo"
        })
        .set('x-api-key', process.env.API_KEY);

        expect(response.status).toBe(201);
        tasktitle = response.body.title;
    })
    it('should create get a task', async () =>{
        const response = await request(app)
        .get(`/api/tasks/${tasktitle}`)
        .set('x-api-key', process.env.API_KEY);

        expect(response.status).toBe(200);
    })
    it('should create get all tasks', async () =>{
        const response = await request(app)
        .get(`/api/tasks`)
        .set('x-api-key', process.env.API_KEY);

        expect(response.status).toBe(200);
    })
    it('should update a task', async () =>{
        const response = await request(app)
        .patch(`/api/tasks/${tasktitle}`)
        .send({
            update: {
                title: "new Update"
            }
        })
        .set('x-api-key', process.env.API_KEY);

        expect(response.status).toBe(200);
    })
    it('should delete a task', async () =>{
        const response = await request(app)
        .delete(`/api/tasks/${tasktitle}`)
        .set('x-api-key', process.env.API_KEY);

        expect(response.status).toBe(200);
    })
})