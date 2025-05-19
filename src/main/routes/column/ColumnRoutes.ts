import { Router } from "express"
import { adaptRoute, addCrudRoutes } from '../../adapters'
import { makeColumnCrudController } from "../../factories/column/ColumnCrudFactory"
import { auth } from '../../middlewares/auth'

export default (router: Router): void => {
    const path = '/column'
    // router.post('/login', adaptRoute(makeLoginController()))

    addCrudRoutes(router, path, makeColumnCrudController(), auth)
}