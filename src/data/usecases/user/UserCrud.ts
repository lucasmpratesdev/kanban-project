import { IUserCrud } from '../../../domain/usecases/user/ICrudUser'
import { IGetUserByFilterRepository } from  "../../repositories/user/IGetUserByFilterRepository"
import { IUserCrudRepository } from "../../repositories/user"
import bcrypt from 'bcrypt'

export class UserCrud implements IUserCrud {
    constructor(private readonly userCrudRepository: IUserCrudRepository,
                private readonly getUserByFilterRepository: IGetUserByFilterRepository
    ) {}

    async create(data: IUserCrud.CreateParams): Promise<IUserCrud.Result> {
        const userByEmail = await this.getUserByFilterRepository.get({ email: data.email })
        if (userByEmail) {
            return ( { message: 'E-mail já está em uso' } )
        }
        const hashedPassword = await bcrypt.hash(data.password, 10)
        const user = await this.userCrudRepository.create({ ...data, password: hashedPassword })
        return { id: user.id, name: user.name, email: user.email }
    }

    async getAll(): Promise<IUserCrud.Result[]> {
        const users = await this.userCrudRepository.getAll()
        return users.map(({ id, name, email }) => ({ id, name, email }))
    }

    async getOne(id: string): Promise<IUserCrud.Result | null> {
        const user = await this.userCrudRepository.getOne(id)
        return user ? { id: user.id, name: user.name, email: user.email } : null
    }

    async update(id: string, data: Partial<IUserCrud.CreateParams>): Promise<IUserCrud.Result | null> {
        if (data.password) {
        data.password = await bcrypt.hash(data.password, 10)
        }
        const user = await this.userCrudRepository.update(id, data)
        return user ? { id: user.id, name: user.name, email: user.email } : null
    }

    async delete(id: string): Promise<boolean> {
        return this.userCrudRepository.delete(id)
    }
}