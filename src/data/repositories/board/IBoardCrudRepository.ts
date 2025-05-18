import { IBoardCrudUseCase } from '../../../domain/usecases/board/IBoardCrud'

export interface IBoardCrudRepository {
  create(data: IBoardCrudRepository.Params): Promise<IBoardCrudRepository.Result>
  getAll(): Promise<IBoardCrudRepository.Result[]>
  getOne(id: string): Promise<IBoardCrudRepository.Result | null>
  update(id: string, data: Partial<IBoardCrudRepository.Params>): Promise<IBoardCrudRepository.Result | undefined>
  delete(id: string): Promise<boolean>
}

export namespace IBoardCrudRepository {
  export type Params = IBoardCrudUseCase.CreateParams
  export type Result = IBoardCrudUseCase.Result
}