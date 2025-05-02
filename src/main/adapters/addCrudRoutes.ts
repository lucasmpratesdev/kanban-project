import { Router } from 'express'

export const addCrudRoutes = (
    router: Router,
    path: string,
  controller: any, // Controller do CRUD
  authMiddleware?: any // Middleware opcional de autenticação
): void => {
  // Rota de Create
    router.post(path, authMiddleware, async (req, res) => {
        const httpResponse = await controller.create(req)
        res.status(httpResponse.statusCode).json(httpResponse.body)
    })

  // Rota de Read (Todos)
    router.get(path, authMiddleware, async (req, res) => {
        const httpResponse = await controller.findAll(req)
        res.status(httpResponse.statusCode).json(httpResponse.body)
    })

  // Rota de Read (Por ID)
    router.get(`${path}/:id`, authMiddleware, async (req, res) => {
        const httpResponse = await controller.findOne(req)
        res.status(httpResponse.statusCode).json(httpResponse.body)
    })

  // Rota de Update
    router.put(`${path}/:id`, authMiddleware, async (req, res) => {
        const httpResponse = await controller.update(req)
        res.status(httpResponse.statusCode).json(httpResponse.body)
    })

  // Rota de Delete
    router.delete(`${path}/:id`, authMiddleware, async (req, res) => {
        const httpResponse = await controller.delete(req)
        res.status(httpResponse.statusCode).json(httpResponse.body)
    })
}