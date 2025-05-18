export interface IBoardCrudUseCase {
    create(data: IBoardCrudUseCase.CreateParams): Promise<IBoardCrudUseCase.Result>
    getAll(): Promise<IBoardCrudUseCase.Result[]>
    getOne(id: string): Promise<IBoardCrudUseCase.Result | null>
    update(id: string, data: Partial<IBoardCrudUseCase.CreateParams>): Promise<IBoardCrudUseCase.Result | null>
    delete(id: string): Promise<boolean>
}

export namespace IBoardCrudUseCase {
    export type CreateParams = {
    title: string
    description?: string
    userId: string

    }

export type Result = {
    id: string
    title: string
    description?: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    active: boolean
    }
}