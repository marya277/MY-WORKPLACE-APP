import Sequelize from "sequelize";

export const sequelize = new Sequelize('postgres-my', 'postgres-my', '', {
    host: 'localhost',
    dialect: 'postgres'
});