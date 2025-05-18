import { IBoardCrudUseCase } from '../../../domain/usecases/board/IBoardCrud'
import { IGetUserByFilterRepository } from  "../../repositories/user/IGetUserByFilterRepository"
import { IBoardCrudRepository } from "../../repositories/board/IBoardCrudRepository"
import bcrypt from 'bcrypt'

export class BoardCrudUseCase implements IBoardCrudUseCase {
    constructor(private readonly boardCrudRepository: IBoardCrudRepository,
                // private readonly getUserByFilterRepository: IGetUserByFilterRepository
    ) {}

    async create(data: IBoardCrudUseCase.CreateParams): Promise<IBoardCrudUseCase.Result> {
        const board = await this.boardCrudRepository.create(data)
        return board
    }

    async getAll(): Promise<IBoardCrudUseCase.Result[]> {
        const board = await this.boardCrudRepository.getAll()
        return board
    }

    async getOne(id: string): Promise<IBoardCrudUseCase.Result | null> {
        const board = await this.boardCrudRepository.getOne(id)
        return board ? board : null
    }

    async update(id: string, data: Partial<IBoardCrudUseCase.CreateParams>): Promise<IBoardCrudUseCase.Result | null> {
        const board = await this.boardCrudRepository.update(id, data)
        return board ? board : null
    }

    async delete(id: string): Promise<boolean> {
        return this.boardCrudRepository.delete(id)
    }
}