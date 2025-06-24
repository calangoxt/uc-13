import { Router } from 'express';
import {PersonagemController } from '../controller/PersonagenController';

const routes = Router();
const persController = new PersonagemController();

routes.get('/personagens', persController.list);
routes.post('/personagens', persController.create);
routes.get('/personagens/:id', persController.show);
routes.put('/personagens/:id', persController.update);
routes.delete('/personagens/:id', persController.delete);


export default routes;