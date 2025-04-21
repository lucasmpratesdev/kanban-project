export interface IGetUserByFilterRepository {
    get: (data: IGetUserByFilterRepository.Params) => Promise<IGetUserByFilterRepository.Result>
}

export namespace IGetUserByFilterRepository {
    export type Params = {
        id?: string
        email?: string
    }
    
    export type Result = {
        id: string
        name: string
        email: string
        password: string
    } | undefined
}