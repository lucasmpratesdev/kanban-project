
import { ColumnCrudController } from '../../../presentation/controllers/column/ColumnCrudController'
import { ColumnCrudUseCase } from '../../../data/usecases/column/ColumnCrudUseCase'
import { ColumnCrudRepository } from '../../../infra/database/prisma/repository/column/ColumnCrudRepository'
import { BoardCrudRepository } from '../../../infra/database/prisma/repository/board/BoardCrudRepository'
import { makeCreateValidation } from '../../../presentation/validations/makeCreateValidation'

export const makeColumnCrudController = (): ColumnCrudController => {
    const requiredFields = ['name', 'order', 'boardId']
    const columnCrudRepository = new ColumnCrudRepository()
    const boardCrudRepository = new BoardCrudRepository()
    const columnCrudUseCase = new ColumnCrudUseCase(columnCrudRepository, boardCrudRepository)
    return new ColumnCrudController(makeCreateValidation(requiredFields), columnCrudUseCase)
}