import { Router } from "express"
import { adaptRoute, addCrudRoutes } from '../../adapters'
import { makeBoardCrudController } from "../../factories/board/BoardCrudFactory"
import { makeGetBoardFullController } from "../../factories/board/GetBoardFullFactory"
import { auth } from '../../middlewares/auth'

export default (router: Router): void => {
    const path = '/board'
    router.get('/board/:id/full', adaptRoute(makeGetBoardFullController() ))

    addCrudRoutes(router, path, makeBoardCrudController(), auth)
}