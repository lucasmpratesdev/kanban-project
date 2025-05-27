
import { GetBoardFullController } from '../../../presentation/controllers/board/GetBoardFullController'
import { GetBoardFullRepository } from '../../../infra/database/prisma/repository/board/GetBoardFullRepository'
import { GetBoardFullUseCase } from '../../../data/usecases/board/GetBoardFullUseCase'
import { makeCreateValidation } from '../../../presentation/validations/makeCreateValidation'

export const makeGetBoardFullController = (): GetBoardFullController => {
    const requiredFields = ['title', 'userId']
    const getBoardFullRepository = new GetBoardFullRepository()
    const getBoardFullUseCase = new GetBoardFullUseCase(getBoardFullRepository)
    return new GetBoardFullController(getBoardFullUseCase)
}