import { repository } from "../../client"
import { IColumnCrudRepository } from "../../../../../data/repositories/column/IColumnCrudRepository"

export class ColumnCrudRepository implements IColumnCrudRepository {

    async create(data: IColumnCrudRepository.Params): Promise<IColumnCrudRepository.Result> {
        const newColumn =  await repository.column.create({ data })
        return newColumn
    }

    async getAll(): Promise<IColumnCrudRepository.Result[]> {
        const column = await repository.column.findMany()
        return column
    }

    async getOne(id: string): Promise<IColumnCrudRepository.Result | null> {
        const column = await repository.column.findUnique({ where: { id } })
        if (!column) return null
        return column
    }

    async update(id: string, data: Partial<IColumnCrudRepository.Params>): Promise<IColumnCrudRepository.Result | undefined> {
        try {
        const updatedColumn = await repository.column.update({
            where: { id },
            data,
        })
        return updatedColumn
        } catch {
        return undefined
        }
    }

    async delete(id: string): Promise<boolean> {
        try {
        await repository.column.delete({ where: { id } })
        return true
        } catch {
        return false
        }
    }
}