import express from "express";
import db from "./utils/db-connection.js";
import studentRoutes from "./routes/studentsRoute.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/students", studentRoutes);

app.listen(3000, () => {
  console.log("Server Started");
});
