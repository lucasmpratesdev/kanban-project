export interface IColumnCrudUseCase {
    create(data: IColumnCrudUseCase.CreateParams): Promise<IColumnCrudUseCase.Result>
    getAll(): Promise<IColumnCrudUseCase.Result[]>
    getOne(id: string): Promise<IColumnCrudUseCase.Result | null>
    update(id: string, data: Partial<IColumnCrudUseCase.CreateParams>): Promise<IColumnCrudUseCase.Result | null>
    delete(id: string): Promise<boolean>
}

export namespace IColumnCrudUseCase {
    export type CreateParams = {
    name: string
    order: number
    boardId: string
    }

export type Result = {
    id: string
    name: string
    order: number
    boardId: string
    createdAt: Date
    updatedAt: Date
    } | {message: string }
}