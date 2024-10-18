import { expect } from "chai";
import supertest from "supertest";
import app from "../src/index.js";
const request = supertest(app)

describe('CRUD test', () => {
    let taskTitle;

    it('should create a new task', async () => {
        const response = await request
            .post('/api/tasks')
            .send({
                title: "Limpiar el piso",
                description: "Limpiar el piso con la trapidora",
                status: "pending",
                dueDate: "30/03/2024",
                priority: "low",
                tags: ["Clean", "LowImportance"],
                note: "Lavar el trapo después de usarlo"
            })
            .set('x-api-key', process.env.API_KEY);

        expect(response.status).to.equal(201);
        taskTitle = response.body.title // Guardar el título para las siguientes pruebas
    });

    it(`should get a task ${taskTitle}`, async () => {
        const response = await request
            .get(`/api/tasks/${taskTitle}`)
            .set('x-api-key', process.env.API_KEY);

        expect(response.status).to.equal(200);
    });

    it('should get all tasks', async () => {
        const response = await request
            .get(`/api/tasks`)
            .set('x-api-key', process.env.API_KEY);

        expect(response.status).to.equal(200);
    });

    it('should update a task', async () => {
        const response = await request
            .patch(`/api/tasks/${taskTitle}`)
            .send({
                update: {
                    note: "Nueva nota"
                }
            })
            .set('x-api-key', process.env.API_KEY);

        expect(response.status).to.equal(200);
    });

    it('should delete a task', async () => {
        const response = await request
            .delete(`/api/tasks/${taskTitle}`)
            .set('x-api-key', process.env.API_KEY);

        expect(response.status).to.equal(204);// No content expected on deletion
    });
});
