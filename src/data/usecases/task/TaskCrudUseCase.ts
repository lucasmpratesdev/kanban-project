import { ITaskCrudUseCase } from '../../../domain/usecases/task/ITaskCrudUseCase'
import { ITaskCrudRepository } from "../../repositories/task/ITaskCrudRepository"
import { IColumnCrudRepository } from "../../repositories/column/IColumnCrudRepository"

export class TaskCrudUseCase implements ITaskCrudUseCase {
    constructor(
        private readonly taskCrudRepository: ITaskCrudRepository,
        private readonly columnCrudRepository: IColumnCrudRepository

    ) {}

    async create(data: ITaskCrudUseCase.CreateParams): Promise<ITaskCrudUseCase.Result> {
        const columnExist = await this.columnCrudRepository.getOne(data.columnId)
        if (!columnExist) {
            return ( { message: 'Column não encontrado' } )
        }
        const result = await this.taskCrudRepository.create(data)
        return result
    }

    async getAll(): Promise<ITaskCrudUseCase.Result[]> {
        const result = await this.taskCrudRepository.getAll()
        return result
    }

    async getOne(id: string): Promise<ITaskCrudUseCase.Result | null> {
        const result = await this.taskCrudRepository.getOne(id)
        return result ? result : null
    }

    async update(id: string, data: Partial<ITaskCrudUseCase.CreateParams>): Promise<ITaskCrudUseCase.Result | null> {
        const result = await this.taskCrudRepository.update(id, data)
        return result ? result : null
    }

    async delete(id: string): Promise<boolean> {
        return this.taskCrudRepository.delete(id)
    }
}