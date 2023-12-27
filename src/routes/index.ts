import { Router } from 'express'
import { userRouter } from './user'
import { Request, Response } from 'express'
import { AppError } from '../errors/AppError'
export const routes = Router()
routes.use('/user',userRouter)