import express from "express";
import db from "./utils/db-connection.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/user", userRoutes);

app.listen(3000, () => {
  console.log("Server Started");
});
