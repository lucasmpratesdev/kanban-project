import { repository } from "../../client"
import { IBoardCrudRepository } from "../../../../../data/repositories/board/IBoardCrudRepository"

export class BoardCrudRepository implements IBoardCrudRepository {

    async create(data: IBoardCrudRepository.Params): Promise<IBoardCrudRepository.Result> {
        const newBoard =  await repository.board.create({ data })
        return newBoard
    }

    async getAll(): Promise<IBoardCrudRepository.Result[]> {
        const boards = await repository.board.findMany()
        return boards
    }

    async getOne(id: string): Promise<IBoardCrudRepository.Result | null> {
        const board = await repository.board.findUnique({ where: { id } })
        if (!board) return null
        return board
    }

    async update(id: string, data: Partial<IBoardCrudRepository.Params>): Promise<IBoardCrudRepository.Result | undefined> {
        try {
        const updatedUser = await repository.board.update({
            where: { id },
            data,
        })
        return updatedUser
        } catch {
        return undefined
        }
    }

    async delete(id: string): Promise<boolean> {
        try {
        await repository.board.delete({ where: { id } })
        return true
        } catch {
        return false
        }
    }
}