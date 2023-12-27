import { Application, json} from "express";

export function configDataflow(app: Application) {
    app.use(json({
        limit: '10mb', // useful for images and files
    }))
}