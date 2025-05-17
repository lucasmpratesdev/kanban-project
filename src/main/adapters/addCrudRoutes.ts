import { Router } from 'express'

export const addCrudRoutes = (
    router: Router,
    path: string,
  controller: any, // Controller do CRUD
  authMiddleware?: any // Middleware opcional de autenticação
): void => {

  /*Console.log('[DEBUG] Métodos do controller:', {
  create: typeof controller.create,
  findAll: typeof controller.getAll,
  findOne: typeof controller.getOne,
  update: typeof controller.update,
  delete: typeof controller.delete
}) */

const getMiddleware = (authMiddleware?: any) => {
  return authMiddleware ? [authMiddleware] : []
}
  // Rota de Create
    router.post(path, ...getMiddleware(authMiddleware), async (req, res) => {
        const httpResponse = await controller.create(req)
        res.status(httpResponse.statusCode).json(httpResponse.body)
    })

  // Rota de Read (Todos)
    router.get(path, ...getMiddleware(authMiddleware), async (req, res) => {
        const httpResponse = await controller.getAll(req)
        res.status(httpResponse.statusCode).json(httpResponse.body)
    })

  // Rota de Read (Por ID)
    router.get(`${path}/:id`, ...getMiddleware(authMiddleware), async (req, res) => {
        const httpResponse = await controller.getOne(req)
        res.status(httpResponse.statusCode).json(httpResponse.body)
    })

  // Rota de Update
    router.put(`${path}/:id`, ...getMiddleware(authMiddleware), async (req, res) => {
        const httpResponse = await controller.update(req)
        res.status(httpResponse.statusCode).json(httpResponse.body)
    })

  // Rota de Delete
    router.delete(`${path}/:id`, ...getMiddleware(authMiddleware), async (req, res) => {
        const httpResponse = await controller.delete(req)
        res.status(httpResponse.statusCode).json(httpResponse.body)
    })
}