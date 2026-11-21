import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "class",
  password: "Vardaan@870",
});

const mysqlConnection = async () => {
  await connection.connect((err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Database connected");
  });
};

export default mysqlConnection;
