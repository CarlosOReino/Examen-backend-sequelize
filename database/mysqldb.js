import { Sequelize } from "sequelize";

export function connec (){
  return new Sequelize ('supermercado', 'root', 'root',{
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    logging: false
  });
}