import { CreatePetDto, UpdatePetDto } from "./pet.dto"


export interface PetRepository {
  createPet(data: CreatePetDto): Promise<CreatePetDto>
  findAllPets(): Promise<CreatePetDto[]>
  findOnePet(id: string): Promise<CreatePetDto | null>
  updatePet(id: string, data: UpdatePetDto): Promise<CreatePetDto | null>
  deletePet(id: string): Promise<void>
}
