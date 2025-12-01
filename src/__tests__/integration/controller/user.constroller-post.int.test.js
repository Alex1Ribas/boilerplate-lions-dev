import request from 'supertest';
import app from "../../../app.js"

describe ("when creating a user whith valid payload", ()=>{
    it("should return status 201 and create user sucessfully", async()=>{
        const payload = {
            name: "Joao Maria",
            email: `joao.maria-${Date.now()+1}@example.com`,
            password: '5Tr0n@P_a5s'
        }

        const response = await request(app)
        .post('/api/users')
        .send(payload)
        .expect(201);

        expect(response.body).toHaveProperty('_id');
        expect(response.body).toHaveProperty('name', payload.name);
        expect(response.body).toHaveProperty('email', payload.email.toLowerCase());
        expect(response.body).not.toHaveProperty('password');
    })
})


 describe('when we creating a invalid user', () => {
    it('should return status 400 when name is missing', async ()=>{
        const invalidName = {
            email: `joao.maria-${Date.now()}@example.com`,
            password: '5Tr0n@P_a5s'
        }

        const response = await request(app)
        .post('/api/users')
        .send(invalidName)
        .expect(400);
        
      expect(response.body).toHaveProperty('error');
      expect(response.body.error).toBe('Nome é obrigatório.');


    })

    it('should return status 400 when email is missing', async ()=>{
        const invalidEmail = {
            name: 'Jhon',
            password: '5Tr0n@P_a5s'
        }

        const response = await request(app)
        .post('/api/users')
        .send(invalidEmail)
        .expect(400);
        
      expect(response.body).toHaveProperty('error');
      expect(response.body.error).toBe('E-mail é obrigatório.');


    })

    it('should return status 400 when password is missing', async ()=>{
        const invalidPassword = {
            name: "Joao Joao",
            email: `joao.maria-${Date.now()+2}@example.com`,
        }

        const response = await request(app)
        .post('/api/users')
        .send(invalidPassword)
        .expect(400);
        
      expect(response.body).toHaveProperty('error');
      expect(response.body.error).toBe('Senha é obrigatória.');
    });
      it('should return status 409 when email already exists', async () => {
        const userData = {
          name: 'First User',
          email: `duplicate-${Date.now()}@example.com`,
          password: 'password123',
        };
  
        // Create first user
        await request(app)
          .post('/api/users')
          .send(userData)
          .expect(201);
  
        // Try to create user with same email
        const response = await request(app)
          .post('/api/users')
          .send(userData)
          .expect(409);
  
        expect(response.body).toHaveProperty('error');
        expect(response.body.error).toBe('E-mail já cadastrado.');


    })

 })