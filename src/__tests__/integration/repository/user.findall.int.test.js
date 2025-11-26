import userModel from "../../../models/user.model.js";
import userRepository from "../../../repositories/user.repository.js";

describe('when we try to find all users', () => {
    it('returns the corret users', async () =>{
        const userData = {
            name: 'Find All user',
            email: `findall-${Date.now()}@examples.com`,
            password: 'veryverystrongpasswordfindall123'
        }

        const create = await userModel.create(userData);
        const find = await userRepository.findAll();

        expect(find)
    })
})