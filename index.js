import express from "express";
import mysqlConnection from "./config/sql.js";

const app = express();
mysqlConnection();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server Started");
});
