import { HttpResponse } from "../protocols/Http"

export const ok = (data: any): HttpResponse => ({
    statusCode: 200,
    body: data
})

export const badRequest = (error: Error): HttpResponse => ({
    statusCode: 400,
    body: { error: error.message }
})

export const serverError = (error: Error): HttpResponse => ({
    statusCode: 500,
    body: { error: error.message }
})

export const unauthorized = (error: Error | string): HttpResponse => ({
    statusCode: 401,
    body: { error: typeof error === 'string' ? error : error.message }
})