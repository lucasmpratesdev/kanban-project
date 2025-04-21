export interface ILoginAuth {
    login: (data: ILoginAuth.Params) => Promise<ILoginAuth.Result>
}

export namespace ILoginAuth {
    export type Params = {
        email: string
        password: string
    }

    export type Result = {
        token: string
        user: {
            id: string
            name: string
            email: string
            // password: string
        } 
    } | undefined
}