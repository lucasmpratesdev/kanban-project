import { IColumnCrudUseCase } from '../../../domain/usecases/column/IColumnCrudUseCase'

export interface IColumnCrudRepository {
  create(data: IColumnCrudRepository.Params): Promise<IColumnCrudRepository.Result>
  getAll(): Promise<IColumnCrudRepository.Result[]>
  getOne(id: string): Promise<IColumnCrudRepository.Result | null>
  update(id: string, data: Partial<IColumnCrudRepository.Params>): Promise<IColumnCrudRepository.Result | undefined>
  delete(id: string): Promise<boolean>
}

export namespace IColumnCrudRepository {
  export type Params = IColumnCrudUseCase.CreateParams
  export type Result = IColumnCrudUseCase.Result
}