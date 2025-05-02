import 'express'

declare module 'express' {
    interface Request {
        user?: any // Ou defina um tipo específico: { id: string, email: string, ... }
    }
}
