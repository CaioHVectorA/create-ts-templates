import { PrismaClient } from "@prisma/client"

export abstract class BaseRepository {
    prisma: PrismaClient = new PrismaClient()
    constructor(){}
}
