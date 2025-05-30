import { Controller, HttpResponse, Validation } from '../../protocols'
import { badRequest, ok, serverError, unauthorized } from '../../helpers/httpHelpers'
import { ILoginAuth } from '../../../domain/usecases/auth/ILoginAuth'

const isLoginError = (res: ILoginAuth.Result): res is { success: false; error: string } => {
    return !res.success
}
export class LoginController implements Controller {
    constructor (
        private readonly validation: Validation,
        private readonly loginAuth: ILoginAuth

    ) {}

    async handle(request: any): Promise<HttpResponse> {
        try {
            const error = await this.validation.validate(request.body)
            if (error) {
                return badRequest(error)
            }

            const { email, password } = request.body

            const result = await this.loginAuth.login({ email, password })

            if (isLoginError(result)) {
                return unauthorized(new Error(result.error))
            }

            return ok(result)
            
        } catch (error: any) {
            console.error(error)
            return serverError(error)
        }
    }
}


/* export namespace IGetAllManutentionPageController {
    export type Params = {
        skip: number
        take: number
        companyId: number
        orderByParam: string
        orderOrientation: string
        searchParam: string
        searchValue: string
    }
} */