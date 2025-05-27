export interface IGetBoardFullUseCase {
    get(id: string): Promise<IGetBoardFullUseCase.Result | null>
    // update(id: string, data: Partial<IBoardCrudUseCase.CreateParams>): Promise<IBoardCrudUseCase.Result | null>
}

export namespace IGetBoardFullUseCase {
export type Result = {
    id: string
    title: string
    description?: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    active: boolean
    columns: Column[]
    }
export type Column = {
    id: string
    name: string
    order: number
    boardId: string
    createdAt: Date
    updatedAt: Date
    tasks: Task[]
    }

export type Task = {
    id: string
    title: string
    description?: string | null
    order: number
    columnId: string
    createdAt: Date
    updatedAt: Date
    }
}