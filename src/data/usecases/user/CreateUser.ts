import { ICreateUser } from "../../../domain/usecases/user/ICreateUser"
import { IGetUserByFilterRepository } from  "../../repositories/user/IGetUserByFilterRepository"
import { ICreateUserRepository } from "../../repositories/user/ICreateUserRepository"
import bcrypt from 'bcrypt'


export class CreateUser implements ICreateUser {
    constructor (
        private readonly getUserByFilterRepository: IGetUserByFilterRepository,
        private readonly createUserRepository: ICreateUserRepository
    ) {}

    async create(data: ICreateUser.Params): Promise<ICreateUser.Result> {

        const userByEmail = await this.getUserByFilterRepository.get({ email: data.email })
        if (userByEmail) {
            throw new Error("E-mail já está em uso")
        }
        const hashedPassword = await bcrypt.hash(data.password, 10)
        const newUser = await this.createUserRepository.create({
            name: data.name,
            email: data.email,
            password: hashedPassword,
        })

        return newUser
    }
}