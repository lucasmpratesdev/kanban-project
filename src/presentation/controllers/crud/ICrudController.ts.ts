import { HttpResponse } from '../../protocols'

export interface ICrudController<T = any, R = any> {
    create(request: { body: T }): Promise<HttpResponse>
    getAll(): Promise<HttpResponse>
    getOne(request: { params: { id: string } }): Promise<HttpResponse>
    update(request: { params: { id: string }; body: Partial<T> }): Promise<HttpResponse>
    delete(request: { params: { id: string } }): Promise<HttpResponse>
}