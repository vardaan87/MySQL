import { Sequelize } from "sequelize";

const sequelize = new Sequelize("class", "root", "Vardaan@870", {
  host: "localhost",
  dialect: "mysql",
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    throw error;
  }
};

export { connectDB };
export default sequelize;

// import mysql from "mysql2";

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "class",
//   password: "Vardaan@870",
// });

// connection.connect((err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Database Connected");

//   const students = `CREATE TABLE IF NOT EXISTS students(
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   name VARCHAR(255),
//   email VARCHAR(255) UNIQUE,
//   age INT
//   )`;

//   connection.execute(students, (err) => {
//     if (err) {
//       console.log(err);
//       connection.end;
//       return;
//     }
//   });
// });

// export default connection;
