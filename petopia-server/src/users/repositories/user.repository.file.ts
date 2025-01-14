import { FileRepositoryUtils } from "src/utils/file.util"
import { CreateUserDto, UpdateUserDto } from "../interfaces/user.dto"
import { UserRepository } from "../interfaces/user.repository"


export class UserRepositoryFile implements UserRepository {
  private fileUtils: FileRepositoryUtils

  constructor() {
    this.fileUtils = new FileRepositoryUtils({
      baseDir: 'data',
      fileName: 'users.json',
      initialData: []
    })
  }

  async createUser(data: CreateUserDto) {
    const users = this.fileUtils.readData<CreateUserDto & { id: string }>()
    const newUser = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date()
    }
    users.push(newUser)
    this.fileUtils.writeData(users)
    return newUser
  }

  async findAllUsers() {
    return this.fileUtils.readData<CreateUserDto & { id: string }>()
  }

  async findOneUser(id: string) {
    const users = this.fileUtils.readData<CreateUserDto & { id: string }>()
    return users.find(user => user.id === id) || null
  }

  async updateUser(id: string, data: UpdateUserDto) {
    const users = this.fileUtils.readData<(CreateUserDto & { id: string })>()
    const index = users.findIndex(user => user.id === id)
    if (index < 0) return null
    const existing = users[index]
    const updated = {
      ...existing,
      ...data,
      updatedAt: new Date()
    }
    users[index] = updated
    this.fileUtils.writeData(users)
    return updated
  }

  async deleteUser(id: string) {
    let users = this.fileUtils.readData<CreateUserDto & { id: string }>()
    users = users.filter(user => user.id !== id)
    this.fileUtils.writeData(users)
  }
}
