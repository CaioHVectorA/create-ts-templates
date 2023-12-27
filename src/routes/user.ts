import { Router, Request, Response } from "express";
import { UserController } from "../controllers/user.controller";

export const userRouter = Router()
const userController = new UserController()
userRouter.get('/:id', userController.getById)
userRouter.post('/', userController.create)