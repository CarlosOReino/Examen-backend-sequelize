import { DataTypes } from 'sequelize';
import { connec } from '../database/mysqldb.js';

const sequelize = connec();

// modelo de producto
const Producto = sequelize.define('Producto', {
  codBarras: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precio: {
    type: DataTypes.DECIMAL,
    allowNull: false
  }
}, {
  tableName: 'productos',
  timestamps: false 
});

// modelo de cliente
const Cliente = sequelize.define('Cliente', {
    dni: {
        type: DataTypes.CHAR,
        autoIncrement: false,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numTarjeta: {
        type: DataTypes.STRING,
        allowNull: false
    }
    }, {
    tableName: 'clientes',
    timestamps: false 
    });



// Conectar a la base de datos
export async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Conexión establecida correctamente.');
    await Producto.sync(); // Esto crea la tabla si no existe
    console.log('Modelo User sincronizado con la base de datos.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
}

// Crear un producto
export async function createProduct(productData) {
  try {
    const newProduct = new Producto(productData);
    const savedProduct = await newProduct.save();
    console.log('Producto creado:', savedProduct);
    return savedProduct;
  } catch (error) {
    console.error('Error al crear producto:', error);
  }
}


// Crear un cliente
export async function createClient(clientData) {
    try {
      const newClient = new Cliente(clientData);
      const savedClient = await newClient.save();
      console.log('Cliente creado:', savedClient);
      return savedClient;
    } catch (error) {
      console.error('Error al crear cliente:', error);
    }
  }