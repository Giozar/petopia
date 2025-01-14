export interface CreatePetDto { 
  userId: String,
  name: String,
  species: String,
  age: String,
  photos: String,
  createdAt: Date;
  updatedAt: Date;
}

export interface UpdatePetDto {
  userId?: String,
  name?: String,
  species?: String,
  age?: String,
  photos?: String,
}
