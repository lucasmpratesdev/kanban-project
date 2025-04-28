import { repository } from "../../client"
import { IGetUserByFilterRepository } from "../../../../../data/repositories/user/IGetUserByFilterRepository"

export class GetUserByFilterRepository implements IGetUserByFilterRepository {
    async get(data: IGetUserByFilterRepository.Params): Promise<IGetUserByFilterRepository.Result> {
        const where: any = {}

        if (data.email) {
            where.email = data.email
        }

        if (data.id) {
            where.id = data.id
        }

        const user = await repository.user.findUnique({
            where
            /* order or limit results:
            orderBy: {
                createdAt: 'desc'
            },
            take: 10
            */
        })
        return user
    }
}