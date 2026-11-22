import { DataTypes } from "sequelize";
import sequelize from "../utils/db.js";

const Bus = sequelize.define(
  "Bus",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    busNumber: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    totalSeats: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    availableSeats: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "buses",
    timestamps: false,
  },
);

export default Bus;
