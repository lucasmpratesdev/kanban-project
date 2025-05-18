import { Request } from 'express'
import { ok, serverError, notFound, badRequest } from '../../helpers/httpHelpers'
import { IBoardCrudUseCase } from '../../../domain/usecases/board/IBoardCrud'
import { Validation } from "../../../presentation/protocols";


export class BoardCrudController {
    constructor(
        private readonly validation: Validation,
        private readonly boardCrud: IBoardCrudUseCase

    ) {}

    async create(req: Request) {
        try {
        const error = await this.validation.validate(req.body)
        if (error) {
            return badRequest(error)
        }

        const result = await this.boardCrud.create(req.body)
        return ok(result)
        } catch (error) {
        return serverError(error)
        }
    }

    async getAll() {
        try {
        const result = await this.boardCrud.getAll()
        return ok(result)
        } catch (err) {
        return serverError(err)
        }
    }

    async getOne(req: Request) {
        try {
        const result = await this.boardCrud.getOne(req.params.id)
        return result ? ok(result) : notFound('Board não encontrado')
        } catch (err) {
        return serverError(err)
        }
    }

    async update(req: Request) {
        try {
        const error = await this.validation.validate(req.body)
        if (error) {
            return badRequest(error)
        }

        const result = await this.boardCrud.update(req.params.id, req.body)
        return result ? ok(result) : notFound('Board não encontrado')
        } catch (err) {
        return serverError(err)
        }
    }

    async delete(req: Request) {
        try {
        const result = await this.boardCrud.delete(req.params.id)
        return result ? ok({ deleted: true }) : notFound('Board não encontrado')
        } catch (err) {
        return serverError(err)
        }
    }
}