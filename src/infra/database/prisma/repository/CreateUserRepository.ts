import { repository } from "../client"
import { ICreateUserRepository } from "../../../../data/repositories/user/ICreateUserRepository"

export class CreateUserRepository implements ICreateUserRepository {
    async create(data: ICreateUserRepository.Params): Promise<ICreateUserRepository.Result> {
        const newUser = await repository.user.create({ data })
        const { password, ...userWithoutPassword } = newUser

        return userWithoutPassword
    }
}
