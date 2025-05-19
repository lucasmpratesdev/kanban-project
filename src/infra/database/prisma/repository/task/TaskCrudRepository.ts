import { repository } from "../../client"
import { ITaskCrudRepository } from "../../../../../data/repositories/task/ITaskCrudRepository"

export class TaskCrudRepository implements ITaskCrudRepository {

    async create(data: ITaskCrudRepository.Params): Promise<ITaskCrudRepository.Result> {
        const newTask =  await repository.task.create({ data })
        return newTask
    }

    async getAll(): Promise<ITaskCrudRepository.Result[]> {
        const task = await repository.task.findMany()
        return task
    }

    async getOne(id: string): Promise<ITaskCrudRepository.Result | null> {
        const task = await repository.task.findUnique({ where: { id } })
        if (!task) return null
        return task
    }

    async update(id: string, data: Partial<ITaskCrudRepository.Params>): Promise<ITaskCrudRepository.Result | undefined> {
        try {
        const updatedTask = await repository.task.update({
            where: { id },
            data,
        })
        return updatedTask
        } catch {
        return undefined
        }
    }

    async delete(id: string): Promise<boolean> {
        try {
        await repository.task.delete({ where: { id } })
        return true
        } catch {
        return false
        }
    }
}