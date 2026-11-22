import express from "express";
import sequelize, { connectDB } from "./utils/db.js";
import studentRoutes from "./routes/studentsRoute.js";
import Student from "./model/student.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/students", studentRoutes);

const startServer = async () => {
  try {
    await connectDB();
    await Student.sync();

    app.listen(3000, () => {
      console.log("Server Started");
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
