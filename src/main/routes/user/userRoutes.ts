import { Router } from "express"
import { adaptRoute, addCrudRoutes } from '../../adapters'
import { makeUserCrudController } from "../../factories/user/UserCrudFactory"

export default (router: Router): void => {
    const path = '/user'
    // router.post('/login', adaptRoute(makeLoginController()))

    addCrudRoutes(router, path, makeUserCrudController())
}