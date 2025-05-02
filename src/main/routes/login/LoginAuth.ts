import { Router } from "express"
import { adaptRoute, addCrudRoutes } from '../../adapters'
import { makeLoginController } from "../../factories/login/LoginFactory"

export default (router: Router): void => {
    router.post('/login', adaptRoute(makeLoginController()))
}