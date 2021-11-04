import express, { Express } from 'express';
import request from 'supertest';

import { handleHttpRequest } from '../src';

describe('The HTTP Request Handler', function() {
    let server: Express

    beforeAll(() => {
        server = express();
        server.use(handleHttpRequest)
    });

    it('should answer "Hello !" to any request', async () => {
        await request(server)
            .get('/')
            .expect('Hello !')
    })
})