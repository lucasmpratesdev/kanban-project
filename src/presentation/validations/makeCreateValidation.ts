import { Validation } from "../protocols"
import { RequiredFieldValidation } from "./requiredFieldValidation"

export const makeCreateValidation = (fields: string[]): Validation => {
    const validations: Validation[] = fields.map(field => new RequiredFieldValidation(field))

    return {
        async validate(input: any): Promise<Error | null> {
        for (const validation of validations) {
            const error = await validation.validate(input)
            if (error) {
            return error
            }
        }
        return null
        }
    }
}