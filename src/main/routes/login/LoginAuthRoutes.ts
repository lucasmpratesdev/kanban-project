import { Router } from "express"
import { adaptRoute, addCrudRoutes } from '../../adapters'
import { makeLoginController } from "../../factories/login/login-factory"

export default (router: Router): void => {
    router.post('/login', adaptRoute(makeLoginController()))

    
}