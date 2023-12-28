import 'express-async-errors'
import express, { Request, Response, NextFunction } from 'express'
import { config } from './config'

const PORT = 3000 

export const app = config(express())
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))