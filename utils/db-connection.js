import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "class",
  password: "Vardaan@870",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Database Connected");

  const students = `CREATE TABLE IF NOT EXISTS students(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  age INT
  )`;

  connection.execute(students, (err) => {
    if (err) {
      console.log(err);
      connection.end;
      return;
    }
  });
});

export default connection;
