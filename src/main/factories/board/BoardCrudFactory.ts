
import { BoardCrudController } from '../../../presentation/controllers/board/BoardCrudController'
import { BoardCrudUseCase } from '../../../data/usecases/board/BoardCrudUseCase'
import { BoardCrudRepository } from '../../../infra/database/prisma/repository/board/BoardCrudRepository'
import { makeCreateValidation } from '../../../presentation/validations/makeCreateValidation'

export const makeBoardCrudController = (): BoardCrudController => {
    const requiredFields = ['title', 'userId']
    const boardCrudRepository = new BoardCrudRepository()
    const boardCrudUseCase = new BoardCrudUseCase(boardCrudRepository)
    return new BoardCrudController(makeCreateValidation(requiredFields), boardCrudUseCase)
}