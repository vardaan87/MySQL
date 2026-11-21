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

  const users = `CREATE TABLE IF NOT EXISTS Users(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20),
  email VARCHAR(255)
  )`;

  connection.execute(users, (err) => {
    if (err) {
      console.log(err);
      connection.end;
      return;
    }
  });
});

export default connection;
