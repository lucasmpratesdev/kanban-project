export interface IGetUserByEmailRepository {
    get: (data: IGetUserByEmailRepository.Params) => Promise<IGetUserByEmailRepository.Result>
}

export namespace IGetUserByEmailRepository {
    export type Params = {
        email: string 
    }
    
    export type Result = {
        id: number
        nome: string
        email: string 
    }
}