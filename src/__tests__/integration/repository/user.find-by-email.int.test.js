import userModel from "../../../models/user.model";
import userRepository from "../../../repositories/user.repository";

describe('when we try find corret user by email', () =>{
    it('should return corret user', async () =>{
        const payload = {
            name: 'FindByEmail Rocha',
            email: `useremail-${Date.now()}@example.com`,
            password: 'anotherpassword@Ver1Strong'
        }

        const create = await userModel.create(payload);
        const find = await userRepository.findByEmail(create.email)

        expect(find.email).toEqual(create.email)
    })
})