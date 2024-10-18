import express from 'express';
import dotenv from 'dotenv';
import TaskRoutes from './routes/Tasks.routes.js';
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.use('/api', TaskRoutes)

app.listen(PORT, () =>{
    console.log(`api running in port ${PORT}`);
})

export default app;