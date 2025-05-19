import { Request } from 'express'
import { ok, serverError, notFound, badRequest } from '../../helpers/httpHelpers'
import { ITaskCrudUseCase } from '../../../domain/usecases/task/ITaskCrudUseCase'
import { Validation } from "../../protocols";


export class TaskCrudController {
    constructor(
        private readonly validation: Validation,
        private readonly TaskCrud: ITaskCrudUseCase

    ) {}

    async create(req: Request) {
        try {
        const error = await this.validation.validate(req.body)
        if (error) {
            return badRequest(error)
        }

        const result = await this.TaskCrud.create(req.body)
        return ok(result)
        } catch (error) {
            console.log(error)
        return serverError(error)
        }
    }

    async getAll() {
        try {
        const result = await this.TaskCrud.getAll()
        return ok(result)
        } catch (err) {
        return serverError(err)
        }
    }

    async getOne(req: Request) {
        try {
        const result = await this.TaskCrud.getOne(req.params.id)
        return result ? ok(result) : notFound('Task não encontrado')
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

        const result = await this.TaskCrud.update(req.params.id, req.body)
        return result ? ok(result) : notFound('Task não encontrado')
        } catch (err) {
        return serverError(err)
        }
    }

    async delete(req: Request) {
        try {
        const result = await this.TaskCrud.delete(req.params.id)
        return result ? ok({ deleted: true }) : notFound('Task não encontrado')
        } catch (err) {
        return serverError(err)
        }
    }
}