import { CreateUserDto, LoginUserDto, UpdateUserDto } from "../interfaces/user.dto"
import { UserRepository } from "../interfaces/user.repository"
import { UserModel } from "../models/user.model"
import bcrypt from "bcrypt"

export class UserRepositoryMongoDB implements UserRepository {
  /**
   * Registra un usuario en la colección "users" de Mongo,
   * hasheando la contraseña antes de guardarla.
   */
  async createUser(data: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(data.password.toString(), 10)
    const user = { ...data, password: hashedPassword }
    const createdUser = await UserModel.create(user)
    return createdUser
  }

  /**
   * Inicia sesión validando la contraseña encriptada de Mongo
   */
  async loginUser(data: LoginUserDto) {
    const user = await UserModel.findOne({ email: data.email })
    if (!user) {
      throw new Error("Invalid credentials")
    }

    const isPasswordValid = await bcrypt.compare(data.password.toString(), user.password.toString())
    if (!isPasswordValid) {
      throw new Error("Invalid credentials")
    }

    return user
  }

  /**
   * Retorna todos los usuarios
   */
  async findAllUsers() {
    return UserModel.find()
  }

  /**
   * Retorna un usuario por ID
   */
  async findOneUser(id: string) {
    return UserModel.findById(id)
  }

  /**
   * Actualiza un usuario y lo retorna
   */
  async updateUser(id: string, data: UpdateUserDto) {
    return UserModel.findByIdAndUpdate(id, data, { new: true })
  }

  /**
   * Elimina un usuario por ID
   */
  async deleteUser(id: string) {
    await UserModel.findByIdAndDelete(id)
  }
}
