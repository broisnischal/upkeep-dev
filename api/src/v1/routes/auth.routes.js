import { Router } from "express"
import { authActivate, authRegister, checkLogin, logout, verifyLogin } from "../controllers/auth.controller.js"
import { useLogin } from "../middlewares/auth.js"

const authRouter = Router()

authRouter.get("/activate/:token", authActivate)
authRouter.post("/", authRegister)
authRouter.post("/login", verifyLogin)
authRouter.get("/logout", logout)
authRouter.get("/status", useLogin, checkLogin)

export default authRouter
