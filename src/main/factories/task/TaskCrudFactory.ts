
import { TaskCrudController } from '../../../presentation/controllers/task/TaskCrudController'
import { TaskCrudUseCase } from '../../../data/usecases/task/TaskCrudUseCase'
import { TaskCrudRepository } from '../../../infra/database/prisma/repository/task/TaskCrudRepository'
import { ColumnCrudRepository } from '../../../infra/database/prisma/repository/column/ColumnCrudRepository'
import { makeCreateValidation } from '../../../presentation/validations/makeCreateValidation'

export const makeTaskCrudController = (): TaskCrudController => {
    const requiredFields = ['title', 'order', 'columnId']
    const taskCrudRepository = new TaskCrudRepository()
    const columnCrudRepository = new ColumnCrudRepository()
    const taskCrudUseCase = new TaskCrudUseCase(taskCrudRepository, columnCrudRepository)
    return new TaskCrudController(makeCreateValidation(requiredFields), taskCrudUseCase)
}