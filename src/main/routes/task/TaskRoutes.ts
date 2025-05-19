import { Router } from "express"
import { adaptRoute, addCrudRoutes } from '../../adapters'
import { makeTaskCrudController } from "../../factories/task/TaskCrudFactory"
import { auth } from '../../middlewares/auth'

export default (router: Router): void => {
    const path = '/task'
    // router.post('/login', adaptRoute(makeLoginController()))

    addCrudRoutes(router, path, makeTaskCrudController(), auth)
}