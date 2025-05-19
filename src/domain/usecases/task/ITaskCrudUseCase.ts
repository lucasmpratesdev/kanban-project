export interface ITaskCrudUseCase {
    create(data: ITaskCrudUseCase.CreateParams): Promise<ITaskCrudUseCase.Result>
    getAll(): Promise<ITaskCrudUseCase.Result[]>
    getOne(id: string): Promise<ITaskCrudUseCase.Result | null>
    update(id: string, data: Partial<ITaskCrudUseCase.CreateParams>): Promise<ITaskCrudUseCase.Result | null>
    delete(id: string): Promise<boolean>
}

export namespace ITaskCrudUseCase {
    export type CreateParams = {
        title: string
        description?: string | null
        order: number
        columnId: string
    }

export type Result = {
    id: string
    title: string
    description?: string | null
    order: number
    columnId: string
    createdAt: Date
    updatedAt: Date
    } | {message: string }
}