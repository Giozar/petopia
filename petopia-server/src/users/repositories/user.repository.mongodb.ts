import { CreateUserDto, UpdateUserDto } from "../interfaces/user.dto"
import { UserRepository } from "../interfaces/user.repository"
import { UserModel } from "../models/user.model"


export class UserRepositoryMongoDB implements UserRepository {
  async createUser(data: CreateUserDto) {
    return UserModel.create(data)
  }

  async findAllUsers() {
    return UserModel.find()
  }

  async findOneUser(id: string) {
    return UserModel.findById(id)
  }

  async updateUser(id: string, data: UpdateUserDto) {
    return UserModel.findByIdAndUpdate(id, data, { new: true })
  }

  async deleteUser(id: string) {
    await UserModel.findByIdAndDelete(id)
  }
}
