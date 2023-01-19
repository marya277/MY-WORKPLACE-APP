import express from "express";
import users from "./routes/users.routes.js";

const app = express();

app.use(express.json());
app.use(users)

export default app;
