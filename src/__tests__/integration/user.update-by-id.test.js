import userModel from "../../models/user.model.js";
import userRepository from "../../repositories/user.repository.js";

describe('whes we try find and update user',() =>{
    it('returns a corrret updated user', async() =>{
        const userData = {
            name: "beforeUpdate",
            email: `beforeUpdate-${Date.now()}@example.com`,
            password: 'fragilPassBefore'
        }
        const userData1 = {
            name: 'Updated name',
            email: `updatedMail@example.com`,
            password: 'NowYourpassIsVeryStrong@b#e7a&tikld_a!'
        }

        const create = await userModel.create(userData)

        const up = await userRepository.updateById(create._id, userData1)

        expect(up).toBeDefined()
        console.log(up);



    })
})