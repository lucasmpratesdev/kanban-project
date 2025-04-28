import { Validation } from "../../../presentation/protocols";

export class RequiredFieldValidation implements Validation {
    constructor(private readonly fieldName: string) {}

    async validate(input: any): Promise<Error | null> {
        if (!input[this.fieldName]) {
            return new Error(`Missing param: ${this.fieldName}`)
        }
        return null
    }
}