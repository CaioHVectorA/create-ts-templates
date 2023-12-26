import request from 'supertest';
import assert from 'assert';
import { app } from '../app'

describe('Testando a rota POST /user', () => {
    it('Deve adicionar um novo usuário com sucesso', async () => {
        const response = await request(app)
            .post('/user')
            .send({ email: 'novousuario@email.com', password: 'senha123', username: 'novonomeusuario' });

        assert.strictEqual(response.status, 201);
        assert.deepStrictEqual(response.body, { status: 'OK' });
    });

    it('Deve retornar erro se o usuário já existir', async () => {
        const response = await request(app)
            .post('/user')
            .send({ email: 'novousuario@email.com', password: 'senha123', username: 'novonomeusuario' });

        assert.strictEqual(response.status, 400);
    });
});
