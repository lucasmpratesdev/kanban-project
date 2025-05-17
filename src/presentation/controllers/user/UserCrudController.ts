import { Request } from 'express'
import { ok, serverError, notFound } from '../../helpers/httpHelpers'
import { IUserCrud } from '../../../domain/usecases/user/ICrudUser'

export class UserCrudController {
    constructor(private readonly userCrud: IUserCrud) {}

    async create(req: Request) {
        try {
        const result = await this.userCrud.create(req.body)
        return ok(result)
        } catch (error) {
        return serverError(error)
        }
    }

    async getAll() {
        try {
        const result = await this.userCrud.getAll()
        return ok(result)
        } catch (err) {
        return serverError(err)
        }
    }

    async getOne(req: Request) {
        try {
        const result = await this.userCrud.getOne(req.params.id)
        return result ? ok(result) : notFound('Usuário não encontrado')
        } catch (err) {
        return serverError(err)
        }
    }

    async update(req: Request) {
        try {
        const result = await this.userCrud.update(req.params.id, req.body)
        return result ? ok(result) : notFound('Usuário não encontrado')
        } catch (err) {
        return serverError(err)
        }
    }

    async delete(req: Request) {
        try {
        const result = await this.userCrud.delete(req.params.id)
        return result ? ok({ deleted: true }) : notFound('Usuário não encontrado')
        } catch (err) {
        return serverError(err)
        }
    }
}