import { makeCreateValidation } from "../../../presentation/validations/makeCreateValidation"
import { LoginController } from "../../../presentation/controllers/auth/LoginController"
import { LoginAuth } from "../../../data/usecases/auth/LoginAuth"
import { GetUserByFilterRepository } from "../../../infra/database/prisma/repository/user"


export const makeLoginController = (): LoginController => {
    const requiredFields = ['email', 'password']
    const getUserByFilterRepository = new GetUserByFilterRepository()
    const loginAuth = new LoginAuth(getUserByFilterRepository)
    return new LoginController(makeCreateValidation(requiredFields), loginAuth)
}
