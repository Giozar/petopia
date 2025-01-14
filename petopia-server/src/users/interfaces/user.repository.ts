import { CreateUserDto, UpdateUserDto } from "./user.dto"


export interface UserRepository {
  createUser(data: CreateUserDto): Promise<CreateUserDto>
  findAllUsers(): Promise<CreateUserDto[]>
  findOneUser(id: string): Promise<CreateUserDto | null>
  updateUser(id: string, data: UpdateUserDto): Promise<CreateUserDto | null>
  deleteUser(id: string): Promise<void>
}
