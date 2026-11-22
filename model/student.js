import { DataTypes } from "sequelize";
import sequelize from "../utils/db.js";

const Student = sequelize.define(
  "Student",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      unique: true,
    },
    age: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "students",
    timestamps: false,
  },
);

export default Student;
