import { AuthMiddleware } from './AuthMiddleware'
import { Request, Response, NextFunction } from 'express'


const authMiddleware = new AuthMiddleware(process.env.JWT_SECRET || 'secret')
export const auth = (req: Request, res: Response, next: NextFunction) => authMiddleware.handle(req, res, next)
