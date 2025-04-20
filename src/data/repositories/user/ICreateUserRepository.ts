export interface ICreateUserRepository {
    create: (data: ICreateUserRepository.Params) => Promise<ICreateUserRepository.Result>
}

export namespace ICreateUserRepository {
    export type Params = {
        nome: string
        email: string 
    }
    
    export type Result = {
        id: number
        nome: string
        email: string
        createAt: Date
    }
}