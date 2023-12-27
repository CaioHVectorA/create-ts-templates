import cors from 'cors'
import { Application } from "express"
import { corsConfigs } from "./cors"
import { errorHandling } from './error'
import { configDataflow } from './dataflow'
import { routes } from '../routes'

export function config(app: Application): Application {
    app.use(cors(corsConfigs))
    configDataflow(app)
    app.use(routes)
    app.use(errorHandling)
    return app
}