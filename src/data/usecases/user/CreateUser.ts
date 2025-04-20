import { ICreateUser } from "../../../domain/usecases/user/ICreateUser"
import { IGetUserByEmailRepository } from  "../../repositories/user/IGetUserByEmailRepository"
import { ICreateUserRepository } from "../../repositories/user/ICreateUserRepository"

export class CreateUser implements ICreateUser {
    constructor (
        private readonly getUserByEmailRepository: IGetUserByEmailRepository,
        private readonly createUserRepository: ICreateUserRepository
    ) {}

    async create(data: ICreateUser.Params): Promise<ICreateUser.Result> {

        const userExists = await this.getUserByEmailRepository.get({ email: data.email })
        if (userExists) {
            throw new Error("E-mail já está em uso")
        }
        const newUser = await this.createUserRepository.create(data)

        return newUser
    }

}