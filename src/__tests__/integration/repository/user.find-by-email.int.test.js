import userModel from "../../../models/user.model";
import userRepository from "../../../repositories/user.repository";
beforeAll( async () =>{
    userModel.init()
})

beforeEach(async() =>{
    userModel.deleteMany([])
})
describe('when we try find corret user by email', () =>{
    it('return corret user', async () =>{
        const payload = {
            name: 'FindByEmail Rocha',
            email: `useremail-${Date.now()}@example.com`,
            password: 'anotherpassword@Ver1Strong'
        }

        const create = await userModel.create(payload);
        const find = await userRepository.findByEmail(create.email)

        expect(find).toBeDefined()
        expect(console.log(find))
    })
})