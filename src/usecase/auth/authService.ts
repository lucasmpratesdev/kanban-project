import { users, CreateUser } from "../../models/user"
import * as bcrypt from 'bcrypt'

interface RegisterInput {
    name: string
    email: string
    password: string
}

export class RegisterUser {
    public execute({ name, email, password }: RegisterInput) {

        const userExists = users.find(user => user.email === email)
    if (userExists) {
        throw new Error ('E-mail já cadastrado')
    }
    const saltRound = 0
    const hashedPassword = bcrypt.hashSync(password, saltRound)
    const newUser  = CreateUser(name, email, hashedPassword)
    const { password: _, ... userWithoutPassword } = newUser
    
    return userWithoutPassword
    }
} 