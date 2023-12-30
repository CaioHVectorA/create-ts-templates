import { PrismaClient } from "@prisma/client";
import { TEST_DB, DB } from "./config/env";

export const prisma = new PrismaClient({
    datasourceUrl: process.env.NODE_ENV === 'test' ? TEST_DB : DB
})