import { CreatePetDto, UpdatePetDto } from "../interfaces/pet.dto"
import { PetRepository } from "../interfaces/pet.repository"
import { PetModel } from "../models/pet.model"


export class PetRepositoryMongoDB implements PetRepository {
  async createPet(data: CreatePetDto) {
    return PetModel.create(data)
  }

  async findAllPets() {
    return PetModel.find()
  }

  async findOnePet(id: string) {
    return PetModel.findById(id)
  }

  async updatePet(id: string, data: UpdatePetDto) {
    return PetModel.findByIdAndUpdate(id, data, { new: true })
  }

  async deletePet(id: string) {
    await PetModel.findByIdAndDelete(id)
  }
}
