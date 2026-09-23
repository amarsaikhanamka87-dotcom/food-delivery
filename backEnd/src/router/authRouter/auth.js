import { Router } from "express";
import {
  loginController,
  signUpController,
} from "../../controller/auth/auth.js";

export const authRouter = Router();
authRouter.post("/signUp", signUpController).post("/login", loginController);
