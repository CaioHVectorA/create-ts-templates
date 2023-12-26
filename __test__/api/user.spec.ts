import request from 'supertest';
import assert from 'assert';
import { app } from '../../app'
import { describe, expect, test } from '@jest/globals'

describe('test /user route', () => {
    test('should add new user', async () => {
        const response = await request(app)
            .post('/user')
            .send({ email: 'newUser@email.com', password: 'pass', username: 'newUser' });

        expect(response.status).toBe(201);
        expect(response.body).toEqual({ status: 'OK' });
    });

    test('should throw a error', async () => {
        const response = await request(app)
            .post('/user')
            .send({ email: 'newUser@email.com', password: 'pass', username: 'newUser' });

        expect(response.status).toBe(400);
    });
});