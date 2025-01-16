export interface CreateUserDto {
  lastName: String;
  firstName: String;
  email: String;
  password: String;
  createdAt: Date;
  updatedAt: Date;
}

export interface UpdateUserDto {
  lastName?: String;
  firstName?: String;
  email?: String;
  password?: String;
}

export interface LoginUserDto {
  email: String;
  password: String;
}
