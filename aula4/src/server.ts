import express, { Application } from 'express';
import { AppDataSource } from './database/data-source';
import routeUser from './routes/UserRoutes';
import routeProduct from './routes/ProductRoutes'

AppDataSource.initialize()
    .then(() => {
        const app: Application = express();
        app.use(express.json());

        app.use('/api', routeProduct);


        app.listen(3000, () => console.log('Server rodando na porta 3000'));
    })
    .catch((error) => console.log(error));