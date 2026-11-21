import express from "express";
import mysql from "mysql2";

const app = express();

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

  const userCreationQuery = `CREATE TABLE IF NOT EXISTS Users(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20),
  email VARCHAR(255)
  )`;

  connection.execute(userCreationQuery, (err) => {
    if (err) {
      console.log(err);
      connection.end;
      return;
    }
  });

  const busesCreationQuery = `CREATE TABLE IF NOT EXISTS Buses(
  id INT AUTO_INCREMENT PRIMARY KEY,
  busNumber INT,
  totalSeats INT,
  availableSeats INT
  )`;

  connection.execute(busesCreationQuery, (err) => {
    if (err) {
      console.log(err);
      connection.end;
      return;
    }
  });

  const bookingsCreationQuery = `CREATE TABLE IF NOT EXISTS Bookings(
  id INT AUTO_INCREMENT PRIMARY KEY,
  seatNumber INT
  )`;

  connection.execute(bookingsCreationQuery, (err) => {
    if (err) {
      console.log(err);
      connection.end;
      return;
    }
  });

  const paymentsCreationQuery = `CREATE TABLE IF NOT EXISTS Users(
  id INT AUTO_INCREMENT PRIMARY KEY,
  amountPaid INT,
  paymentStatus VARCHAR(255)
  )`;

  connection.execute(paymentsCreationQuery, (err) => {
    if (err) {
      console.log(err);
      connection.end;
      return;
    }
  });
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server Started");
});
