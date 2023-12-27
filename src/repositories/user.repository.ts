import { AppError } from "../errors/AppError";
import { UserRequired } from "../types/User";
import { BaseRepository } from "./base"

export class UserRepository extends BaseRepository {
    async create(data: UserRequired) {
        const userAlreadyExists = await this.prisma.user.findFirst({
            where: { email: data.email }
        })
        if (userAlreadyExists) throw new AppError('User already Exists!')
        const user = await this.prisma.user.create({
            data
        })
        return user
    }
    async getById(id: string) {
        const userFound = await this.prisma.user.findFirst({
            where: {id}
        })
        return userFound
    }
}