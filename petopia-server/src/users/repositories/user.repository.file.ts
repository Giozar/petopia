import { FileRepositoryUtils } from "src/utils/file.util"
import { CreateUserDto, LoginUserDto, UpdateUserDto } from "../interfaces/user.dto"
import { UserRepository } from "../interfaces/user.repository"
import bcrypt from "bcrypt"
import crypto from "crypto"  // Asegúrate de importar crypto

export class UserRepositoryFile implements UserRepository {
  private fileUtils: FileRepositoryUtils

  constructor() {
    this.fileUtils = new FileRepositoryUtils({
      baseDir: 'data',
      fileName: 'users.json',
      initialData: []
    })
  }

  /**
   * Registra un usuario hasheando la contraseña antes de guardarlo en el JSON.
   */
  async createUser(data: CreateUserDto): Promise<CreateUserDto & { id: string }> {
    const users = this.fileUtils.readData<(CreateUserDto & { id: string })>()

    // Hasheamos la contraseña
    const hashedPassword = await bcrypt.hash(data.password.toString(), 10)

    // Creamos el objeto usuario con la contraseña encriptada
    const newUser = {
      ...data,
      password: hashedPassword,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date()
    }

    // Guardamos en el archivo
    users.push(newUser)
    this.fileUtils.writeData(users)

    // Retornamos el nuevo usuario SIN exponer la contraseña
    const { password, ...rest } = newUser
    return newUser
  }

  /**
   * Inicia sesión validando la contraseña encriptada.
   */
  async loginUser(data: LoginUserDto): Promise<(CreateUserDto & { id: string })> {
    // Cargamos la lista de usuarios
    const users = this.fileUtils.readData<(CreateUserDto & { id: string; password: string })>()

    // Buscamos al usuario por email
    const user = users.find(u => u.email === data.email)
    if (!user) {
      throw new Error('No existe el usuario');
    }

    // Comparamos la contraseña encriptada
    const isPasswordValid = await bcrypt.compare(data.password.toString(), user.password.toString())
    if (!isPasswordValid) {
      throw new Error('La contraseña es incorrecta')
    }

    // Retornamos el usuario sin el campo password
    const { password, ...rest } = user
    return user
  }

  /**
   * Retorna todos los usuarios
   */
  async findAllUsers() {
    return this.fileUtils.readData<(CreateUserDto & { id: string })>()
  }

  /**
   * Retorna un usuario por ID o null si no existe
   */
  async findOneUser(id: string) {
    const users = this.fileUtils.readData<(CreateUserDto & { id: string })>()
    return users.find(u => u.id === id) || null
  }

  /**
   * Actualiza un usuario por ID
   */
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

  /**
   * Elimina un usuario por ID
   */
  async deleteUser(id: string) {
    let users = this.fileUtils.readData<(CreateUserDto & { id: string })>()
    users = users.filter(user => user.id !== id)
    this.fileUtils.writeData(users)
  }
}
