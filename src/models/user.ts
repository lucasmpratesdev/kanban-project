import { v4 as uuidv4 } from 'uuid'

export interface User {
    id: string
    name: string
    email: string // sera hash
    password: string // sera hash
    createdAt: Date
}

export const users: User[] = []

export function CreateUser(name: string, email: string, password: string): User {
    const newUser: User = {
        id: uuidv4(),
        name,
        email,
        password,
        createdAt: new Date(),
    }
    users.push(newUser)
    return newUser
}