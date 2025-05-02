import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export class AuthMiddleware {
    constructor(private readonly jwtSecret: string) {}

    async handle(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers.authorization

        if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized' })
        }

        const token = authHeader.split(' ')[1]

        try {
        const decoded = jwt.verify(token, this.jwtSecret)
        req.user = decoded
        next()
        } catch {
        return res.status(401).json({ error: 'Unauthorized' })
        }
    }
}
