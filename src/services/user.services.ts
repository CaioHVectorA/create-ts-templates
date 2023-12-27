import { AppError } from "../errors/AppError";
import { UserRepository } from "../repositories/user.repository";
import { UserProtected, UserRequired } from "../types/User";
const userRepository = new UserRepository()
export class UserService {
    async create(data: UserRequired): Promise<UserProtected> {
        // You can use your business rules here, such as password encrypt, authentication... 
        const { email, id, name } = await userRepository.create(data)
        return { email, id, name }
    }
    async getById(id: string): Promise<UserProtected> {
        const user = await userRepository.getById(id)
        if (!user) throw new AppError('User not found', 404)
        console.log(user)
        return {
            email: user.email, 
            id: user.id, 
            name: user.name
        }
    }
}