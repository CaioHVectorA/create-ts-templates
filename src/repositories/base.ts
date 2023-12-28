import { PrismaClient } from "@prisma/client"
console.log(process.env.NODE_ENV)
export abstract class BaseRepository {
    prisma = new PrismaClient({
        datasourceUrl: process.env.NODE_ENV === 'test' ? 'file:./test.db' : 'file:./dev.db'
    })
    constructor(){}
}
