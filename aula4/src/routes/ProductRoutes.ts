import { Router } from 'express';
import { ProductController } from '../controller/ProductController';

const routes = Router();
const productController = new ProductController();

routes.get('/products', productController.list);
routes.post('/products', productController.create);
routes.get('/products/:id', productController.show);
routes.put('/products/:id', productController.update);
routes.delete('/products/:id', productController.delete);

export default routes;