
import { UserCrudController } from '../../../presentation/controllers/user/UserCrudController'
import { UserCrud } from '../../../data/usecases/user/UserCrud'
import { UserCrudRepository } from '../../../infra/database/prisma/repository/user/UserCrudRepository'
import { GetUserByFilterRepository } from "../../../infra/database/prisma/repository/user"


export const makeUserCrudController = (): UserCrudController => {
    const userCrudRepository = new UserCrudRepository()
    const getUserByFilterRepository = new GetUserByFilterRepository()
    const userCrudUseCase = new UserCrud(userCrudRepository, getUserByFilterRepository)
    return new UserCrudController(userCrudUseCase)
}