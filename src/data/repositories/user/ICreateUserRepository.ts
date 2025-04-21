export interface ICreateUserRepository {
    create: (data: ICreateUserRepository.Params) => Promise<ICreateUserRepository.Result>
}

export namespace ICreateUserRepository {
    export type Params = {
        name: string
        email: string
        password: string 
    }
    
    export type Result = {
        id: string
        name: string
        email: string
        createdAt: Date
        updatedAt: Date
    }
}