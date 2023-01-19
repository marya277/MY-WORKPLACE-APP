import app from './app.js';
import { sequelize } from './database/database.js';

async function main() {
    try {
        await sequelize.authenticate();
        console.log("connection has been established succesfully");
        app.listen(4000);
        console.log("server is connecting", 4000);
    } catch (error) {
        console.log("connection has been established succesfully", error);
    }
}

main();