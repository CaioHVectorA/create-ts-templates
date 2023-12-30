import { PrismaClient } from "@prisma/client"
import { DB, TEST_DB } from "../config/env"
import { prisma } from "../prisma"
export abstract class BaseRepository {
    db = prisma
    constructor(){}
}
