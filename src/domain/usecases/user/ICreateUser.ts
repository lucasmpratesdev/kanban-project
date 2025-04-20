export interface ICreateUser {
    create: (data: ICreateUser.Params) => Promise<ICreateUser.Result> 
}

export namespace ICreateUser {
    export type Params = {
        nome: string
        email: string 
    }
    
    export type Result = {
        id: number
        nome: string
        email: string 
        createAt: Date
    } | undefined
}