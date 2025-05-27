import { IGetBoardFullUseCase } from '../../../domain/usecases/board/IGetBoardFullUseCase'

export interface IGetBoardFullRepository {
    get(id: string): Promise<IGetBoardFullUseCase.Result | null>
}

export namespace IGetBoardFullRepository {
  export type Result = IGetBoardFullUseCase.Result
}