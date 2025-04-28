import { ILoginAuth } from "../../../domain/usecases/auth/ILoginAuth"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import { IGetUserByFilterRepository } from "../../repositories/user/IGetUserByFilterRepository"

export class LoginAuth implements ILoginAuth {
    constructor (
        private readonly getUserByFilterRepository: IGetUserByFilterRepository
    ) {}

    async login(data: ILoginAuth.Params): Promise<ILoginAuth.Result> {
        const { email, password } = data

        const user = await this.getUserByFilterRepository.get({ email })
        if (!user) {
            throw new Error("Usuário não encontrado.")
        }

        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword) {
            throw new Error("Senha incorreta.")
        }
        
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET!, { expiresIn: '1h' })
        return {
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        }
    }
}