import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

export class Authenticate {
    handle(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers.authorization
        
        if (!authHeader) {
            return res.status(401).json({ message: "Token não fornecido." });
        }

        const token = authHeader.split(" ")[1]

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET!)
            next();

        } catch (error) {
            return res.status(401).json({ message: "Token inválido." })
        }
    }
}