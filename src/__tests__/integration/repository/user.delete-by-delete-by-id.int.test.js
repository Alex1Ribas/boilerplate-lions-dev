import userModel from "../../../models/user.model.js";
import userRepository from "../../../repositories/user.repository.js";

describe('when we try delete a user by ID',  () => {
    it('return a sucessfully user deleted ', async() =>{
        const payload = {
            name: 'usertest ',
            email: `userdelete-${Date.now()}@example.com`,
            password: 'wrongpasswordtobedeleted12@34'        
        }

        const create = await userModel.create(payload)
        const del = await userRepository.deleteById(create._id)
        const find = await userRepository.findById(create._id)

        expect(find).toBeNull()
    })
})