import app from "./app.js";
import { sequelize } from "./database/database.js";

async function main() {
  try {
    // await sequelize.authenticate(); //solo para probar que hay conexion
    await sequelize.sync(); //sincroniza con la db para crear las tablas a partir del modelo importado arriba
    console.log("connection has been established succesfully");
    app.listen(process.env.SERVER_NODE_PORT);
    console.log("server is connecting", process.env.SERVER_NODE_PORT);
  } catch (error) {
    console.log("connection has been established succesfully", error);
  }
}

main();
