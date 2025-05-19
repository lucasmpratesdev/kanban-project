import { Request } from 'express'
import { ok, serverError, notFound, badRequest } from '../../helpers/httpHelpers'
import { IColumnCrudUseCase } from '../../../domain/usecases/column/IColumnCrudUseCase'
import { Validation } from "../../protocols";


export class ColumnCrudController {
    constructor(
        private readonly validation: Validation,
        private readonly ColumnCrud: IColumnCrudUseCase

    ) {}

    async create(req: Request) {
        try {
        const error = await this.validation.validate(req.body)
        if (error) {
            return badRequest(error)
        }

        const result = await this.ColumnCrud.create(req.body)
        return ok(result)
        } catch (error) {
            console.log(error)
        return serverError(error)
        }
    }

    async getAll() {
        try {
        const result = await this.ColumnCrud.getAll()
        return ok(result)
        } catch (err) {
        return serverError(err)
        }
    }

    async getOne(req: Request) {
        try {
        const result = await this.ColumnCrud.getOne(req.params.id)
        return result ? ok(result) : notFound('Column não encontrado')
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

        const result = await this.ColumnCrud.update(req.params.id, req.body)
        return result ? ok(result) : notFound('Column não encontrado')
        } catch (err) {
        return serverError(err)
        }
    }

    async delete(req: Request) {
        try {
        const result = await this.ColumnCrud.delete(req.params.id)
        return result ? ok({ deleted: true }) : notFound('Column não encontrado')
        } catch (err) {
        return serverError(err)
        }
    }
}