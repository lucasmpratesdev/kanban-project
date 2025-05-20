import { IColumnCrudUseCase } from '../../../domain/usecases/column/IColumnCrudUseCase'
import { IColumnCrudRepository } from "../../repositories/column/IColumnCrudRepository"
import { IBoardCrudRepository } from "../../repositories/board/IBoardCrudRepository"


export class ColumnCrudUseCase implements IColumnCrudUseCase {
    constructor(
        private readonly columnCrudRepository: IColumnCrudRepository,
        private readonly boardCrudRepository: IBoardCrudRepository
    ) {}

    async create(data: IColumnCrudUseCase.CreateParams): Promise<IColumnCrudUseCase.Result> {
        const boardExist = await this.boardCrudRepository.getOne(data.boardId)
        if (!boardExist) {
            return ( { message: 'Board não encontrado' } )
        }
        const result = await this.columnCrudRepository.create(data)
        return result
    }

    async getAll(): Promise<IColumnCrudUseCase.Result[]> {
        const result = await this.columnCrudRepository.getAll()
        return result
    }

    async getOne(id: string): Promise<IColumnCrudUseCase.Result | null> {
        const result = await this.columnCrudRepository.getOne(id)
        return result ? result : null
    }

    async update(id: string, data: Partial<IColumnCrudUseCase.CreateParams>): Promise<IColumnCrudUseCase.Result | null> {
        const result = await this.columnCrudRepository.update(id, data)
        return result ? result : null
    }

    async delete(id: string): Promise<boolean> {
        return this.columnCrudRepository.delete(id)
    }
}