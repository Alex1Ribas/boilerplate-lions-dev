import request from 'supertest';
import app from "../../../app.js"

describe('When getting a user whith valid payload ', () =>{
    it('should return a valid users', async() =>{
        const userPayload ={
        name: "Joao Maria",
        email: `jm-${Date.now()}@example.com`,
        password: "pa55Veri_Str@ng"
    }

    await request(app)
    .post('/api/users')
    .send(userPayload)
    .expect(201)

    const response = await request(app)
    .get('/api/user')
    .send()
    .expect(200)

    expect(response.body).toHaveProperty('_id');
    expect(response.body).toHaveProperty('name', userPayload.name);
    expect(response.body).toHaveProperty('email', userPayload.email.toLowerCase());
    expect(response.body).not.toHaveProperty('password');
})
})