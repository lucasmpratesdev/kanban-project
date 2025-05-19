import { ITaskCrudUseCase } from '../../../domain/usecases/task/ITaskCrudUseCase'

export interface ITaskCrudRepository {
  create(data: ITaskCrudRepository.Params): Promise<ITaskCrudRepository.Result>
  getAll(): Promise<ITaskCrudRepository.Result[]>
  getOne(id: string): Promise<ITaskCrudRepository.Result | null>
  update(id: string, data: Partial<ITaskCrudRepository.Params>): Promise<ITaskCrudRepository.Result | undefined>
  delete(id: string): Promise<boolean>
}

export namespace ITaskCrudRepository {
  export type Params = ITaskCrudUseCase.CreateParams
  export type Result = ITaskCrudUseCase.Result
}