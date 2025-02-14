import express, {json} from 'express';
import { connec } from './database/mysqldb.js';
import { createNewProduct } from './controllers/product.controller.js';
import { createNewClient } from './controllers/cliente.controller.js';




const app = express();
app.use(json());

// Ruta para conectar a mysql
app.get('/', connec);

// Ruta para crear un producto
app.post("/create-product", createNewProduct);
// Ruta para crear un cliente
app.post("/create-client", createNewClient);
app.listen(3000);

console.log('Server on port', 3000);