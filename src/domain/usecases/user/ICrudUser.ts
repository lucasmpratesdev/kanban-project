export interface IUserCrud {
    create(data: IUserCrud.CreateParams): Promise<IUserCrud.Result>
    getAll(): Promise<IUserCrud.Result[]>
    getOne(id: string): Promise<IUserCrud.Result | null>
    update(id: string, data: Partial<IUserCrud.CreateParams>): Promise<IUserCrud.Result | null>
    delete(id: string): Promise<boolean>
}

export namespace IUserCrud {
    export type CreateParams = {
    name: string
    email: string
    password: string
    }

export type Result = {
    id: string
    name: string
    email: string
    } | {message: string }
}