export interface IUserCrudRepository {
  create(data: IUserCrudRepository.Params): Promise<IUserCrudRepository.Result>
  getAll(): Promise<IUserCrudRepository.Result[]>
  getOne(id: string): Promise<IUserCrudRepository.Result | null>
  update(id: string, data: Partial<IUserCrudRepository.Params>): Promise<IUserCrudRepository.Result | null>
  delete(id: string): Promise<boolean>
}

export namespace IUserCrudRepository {
  export type Params = {
    name: string
    email: string
    password: string
  }

  export type Result = {
    id: string
    name: string
    email: string
  }
}
