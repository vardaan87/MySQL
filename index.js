import express from "express";
import sequelize, { connectDB } from "./utils/db.js";
import studentRoutes from "./routes/studentsRoute.js";
import busesRoutes from "./routes/busesRoute.js";
import usersRoutes from "./routes/usersRoute.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import Student from "./model/student.js";
import Bus from "./model/buses.js";
import User from "./model/user.js";
import Booking from "./model/booking.js";

const app = express();

//Middlewares
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

//Database Association
User.hasMany(Booking);
Booking.belongsTo(User);

app.use("/students", studentRoutes);
app.use("/buses", busesRoutes);
app.use("/bookings", bookingRoutes);
app.use("/users", usersRoutes);

const startServer = async () => {
  try {
    await connectDB();
    await Student.sync();
    await Bus.sync();
    await User.sync();
    await Booking.sync();

    app.listen(3000, () => {
      console.log("Server Started");
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
