import { IGetBoardFullUseCase } from '../../../domain/usecases/board/IGetBoardFullUseCase'
import { IGetBoardFullRepository } from "../../repositories/board/IGetBoardFullRepository"

export class GetBoardFullUseCase implements IGetBoardFullUseCase {
    constructor(
        private readonly getBoardFullRepository: IGetBoardFullRepository
    ) {}

    async get(id: string): Promise<IGetBoardFullUseCase.Result | null> {
        const boardFull = await this.getBoardFullRepository.get(id)
        return boardFull
    }
}