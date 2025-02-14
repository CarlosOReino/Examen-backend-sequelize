import { createProduct } from "../models/sequelize.model.js";

export async function createNewProduct(req, res) { 
    const {codBarras, nombre, precio } = req.body;
    await createProduct({codBarras, nombre, precio });
    res.json({ message: 'Producto creado' });
}

