import { Request, Response } from "express";
import { UserRequired } from "../types/User";
import { UserService } from "../services/user.services";

const userService = new UserService()
export class UserController {
    async create(req: Request, res: Response)  {
        const data = req.body as UserRequired
        const userProtectedData = await userService.create(data)
        res.status(201).json(userProtectedData)
    }
    async getById(req: Request, res: Response) {
        const id = req.params.id
        const user = await userService.getById(id)
        res.json(user)
    }
}