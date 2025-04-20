export interface IGetUser {
    get: (data: IGetUser.Params) => Promise<IGetUser.Result>
}

export namespace IGetUser {
    export type Params = {
        id: number
        nome: string
        email: string 
    }
    
    export type Result = {
        id: number
        nome: string
        email: string 
    }
}