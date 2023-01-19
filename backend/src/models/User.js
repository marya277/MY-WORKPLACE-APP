import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.INTEGER,
    },
    cv: {
      type: DataTypes.STRING,
    },
    english: {
      type: DataTypes.INTEGER,
      default: 0,
    },
    type: {
      type: DataTypes.INTEGER,
      default: 0,
    },
  }, {
    timestamps: true,
  });
