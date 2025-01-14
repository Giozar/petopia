import { UserRepository } from '../interfaces/user.repository'
import { CreateUserDto, UpdateUserDto } from '../interfaces/user.dto'

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  createUser(data: CreateUserDto) {
    return this.userRepository.createUser(data)
  }

  findAllUsers() {
    return this.userRepository.findAllUsers()
  }

  findOneUser(id: string) {
    return this.userRepository.findOneUser(id)
  }

  updateUser(id: string, data: UpdateUserDto) {
    return this.userRepository.updateUser(id, data)
  }

  deleteUser(id: string) {
    return this.userRepository.deleteUser(id)
  }
}
