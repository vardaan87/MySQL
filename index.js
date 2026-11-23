import express from "express";
import sequelize, { connectDB } from "./utils/db.js";
import studentRoutes from "./routes/studentsRoute.js";
import busesRoutes from "./routes/busesRoute.js";
import courseRoutes from "./routes/courseRoutes.js";
import Student from "./model/student.js";
import Bus from "./model/buses.js";
import User from "./model/user.js";
import Course from "./model/course.js";

const app = express();

//Middlewares
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

//
Student.hasMany(Course);
Course.belongsTo(Student);

app.use("/students", studentRoutes);
app.use("/buses", busesRoutes);
app.use("/courses", courseRoutes);

const startServer = async () => {
  try {
    await connectDB();
    await Student.sync();
    await Bus.sync();
    await User.sync();
    await Course.sync();

    app.listen(3000, () => {
      console.log("Server Started");
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
