import { Request } from 'express'
import { ok, serverError, notFound, badRequest } from '../../helpers/httpHelpers'
import { IGetBoardFullUseCase } from '../../../domain/usecases/board/IGetBoardFullUseCase'
import { Validation, HttpResponse } from "../../protocols";


export class GetBoardFullController {
    constructor(
        // private readonly validation: Validation,
        private readonly getBoardFull: IGetBoardFullUseCase

    ) {}

    async handle(request: any): Promise<HttpResponse> {
        try {
        /* const error = await this.validation.validate(request.body)
            if (error) {
                return badRequest(error)
            } */

            const result = await this.getBoardFull.get(request.params.id)
            if (!result) {
                return notFound('Board não encontrado')
            } 
            
            return ok(result)

        } catch (error) {
        return serverError(error)
        }
    }
}