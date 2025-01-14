import { PetRepository } from '../interfaces/pet.repository'
import { CreatePetDto, UpdatePetDto } from '../interfaces/pet.dto'

export class PetService {
  constructor(private readonly petRepository: PetRepository) {}

  createPet(data: CreatePetDto) {
    return this.petRepository.createPet(data)
  }

  findAllPets() {
    return this.petRepository.findAllPets()
  }

  findOnePet(id: string) {
    return this.petRepository.findOnePet(id)
  }

  updatePet(id: string, data: UpdatePetDto) {
    return this.petRepository.updatePet(id, data)
  }

  deletePet(id: string) {
    return this.petRepository.deletePet(id)
  }
}
