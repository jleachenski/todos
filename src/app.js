import "dotenv/config";
import "./config/db.js";
import e from "express";
import todoRoute from "./routes/todoRoute.js";

const app = e();

app.use(e.json());

app.use("/todos", todoRoute);

app.listen(process.env.PORT, () => console.log("App running!"));