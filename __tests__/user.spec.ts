import { expect, describe, test, afterAll, beforeAll } from '@jest/globals'
import supertest from 'supertest'
import { app } from '../src/index'
import { PrismaClient } from '@prisma/client'
import { TEST_DB } from '../src/config/env'
import { prisma } from '../src/prisma'


const testPrisma = new PrismaClient({ datasourceUrl: TEST_DB })


describe('Testing /user routes', () => {
    beforeAll(async () => {
        await testPrisma.user.deleteMany()
    })
    test('Should add new User', async () => {
        const response = await supertest(app)
        .post('/user')
        .send({ email: 'newuser@gmail.com', name: 'MyNewUser', password: "password123" })
        expect(response.statusCode).toBe(201)
    });
    test('Should throw error on trying existing user', async () => {
        const response = await supertest(app)
        .post('/user')
        .send({ email: 'newuser@gmail.com', name: 'MyNewUser', password: "password123" })

        expect(response.statusCode).toBe(400)
    })
})