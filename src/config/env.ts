import { config } from 'dotenv'
config()

export const DB = process.env.DATABASE_URL
export const TEST_DB = process.env.TEST_DATABASE_URL