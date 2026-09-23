import express from "express";
import { connectDB } from "./dataBase/db.js";

import cors from "cors";
import { authRouter } from "./router/authRouter/auth.js";
const app = express();
const port = 8000;

connectDB();
app.use(cors({ origin: "http://localhost:3000" })); // huselt huleen avch baigaaa tal
app.use(express.json());
app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
