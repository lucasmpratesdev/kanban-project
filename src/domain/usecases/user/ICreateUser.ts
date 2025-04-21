export interface ICreateUser {
    create: (data: ICreateUser.Params) => Promise<ICreateUser.Result> 
}

export namespace ICreateUser {
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