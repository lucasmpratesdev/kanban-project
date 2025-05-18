import { Router } from "express"
import { adaptRoute, addCrudRoutes } from '../../adapters'
import { makeBoardCrudController } from "../../factories/board/BoardCrudFactory"
import { auth } from '../../middlewares/auth'

export default (router: Router): void => {
    const path = '/board'
    // router.post('/login', adaptRoute(makeLoginController()))

    addCrudRoutes(router, path, makeBoardCrudController(), auth)
}