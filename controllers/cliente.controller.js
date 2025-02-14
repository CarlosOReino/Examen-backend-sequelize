import {createClient} from '../models/sequelize.model.js';

export async function createNewClient(req, res) {
    const {dni, nombre, apellidos, numTarjeta } = req.body;
        await createClient({dni, nombre, apellidos, numTarjeta });
        res.json({ message: 'Cliente insertado' });

}