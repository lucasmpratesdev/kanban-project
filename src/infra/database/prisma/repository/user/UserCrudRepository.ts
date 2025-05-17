import { repository } from "../../client"
import { IUserCrudRepository } from "../../../../../data/repositories/user"

export class UserCrudRepository implements IUserCrudRepository {

    async create(data: IUserCrudRepository.Params): Promise<IUserCrudRepository.Result> {
        const newUser =  await repository.user.create({ data })
        const { password, ...userWithoutPassword } = newUser
        return userWithoutPassword
    }

    async getAll(): Promise<IUserCrudRepository.Result[]> {
        const users = await repository.user.findMany()
        // map para remover password de cada user
        return users.map(({ password, ...userWithoutPassword }) => userWithoutPassword)
    }

    async getOne(id: string): Promise<IUserCrudRepository.Result | null> {
        const user = await repository.user.findUnique({ where: { id } })
        if (!user) return null
        const { password, ...userWithoutPassword } = user
        return userWithoutPassword
    }

    async update(id: string, data: Partial<IUserCrudRepository.Params>): Promise<IUserCrudRepository.Result | null> {
        try {
        const updatedUser = await repository.user.update({
            where: { id },
            data,
        })
        const { password, ...userWithoutPassword } = updatedUser
        return userWithoutPassword
        } catch {
        return null
        }
    }

    async delete(id: string): Promise<boolean> {
        try {
        await repository.user.delete({ where: { id } })
        return true
        } catch {
        return false
        }
    }
}