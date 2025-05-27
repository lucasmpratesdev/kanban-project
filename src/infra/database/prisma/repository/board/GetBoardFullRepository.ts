import { repository } from "../../client"
import { IGetBoardFullRepository } from "../../../../../data/repositories/board/IGetBoardFullRepository"

export class GetBoardFullRepository implements IGetBoardFullRepository {

    async get(id: string): Promise<IGetBoardFullRepository.Result | null>  {
        const board =  await repository.board.findUnique({
            where: { id },
            include: {
                columns: {
                include: {
                    tasks: true
                }
            }
            // user: true
            }
        })
        return board
    }
}