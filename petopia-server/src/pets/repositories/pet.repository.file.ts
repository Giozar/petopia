import { FileRepositoryUtils } from "src/utils/file.util"
import { CreatePetDto, UpdatePetDto } from "../interfaces/pet.dto"
import { PetRepository } from "../interfaces/pet.repository"


export class PetRepositoryFile implements PetRepository {
  private fileUtils: FileRepositoryUtils

  constructor() {
    this.fileUtils = new FileRepositoryUtils({
      baseDir: 'data',
      fileName: 'pets.json',
      initialData: []
    })
  }

  async createPet(data: CreatePetDto) {
    const pets = this.fileUtils.readData<CreatePetDto & { id: string }>()
    const newPet = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date()
    }
    pets.push(newPet)
    this.fileUtils.writeData(pets)
    return newPet
  }

  async findAllPets() {
    return this.fileUtils.readData<CreatePetDto & { id: string }>()
  }

  async findOnePet(id: string) {
    const pets = this.fileUtils.readData<CreatePetDto & { id: string }>()
    return pets.find(pet => pet.id === id) || null
  }

  async updatePet(id: string, data: UpdatePetDto) {
    const pets = this.fileUtils.readData<(CreatePetDto & { id: string })>()
    const index = pets.findIndex(pet => pet.id === id)
    if (index < 0) return null
    const existing = pets[index]
    const updated = {
      ...existing,
      ...data,
      updatedAt: new Date()
    }
    pets[index] = updated
    this.fileUtils.writeData(pets)
    return updated
  }

  async deletePet(id: string) {
    let pets = this.fileUtils.readData<CreatePetDto & { id: string }>()
    pets = pets.filter(pet => pet.id !== id)
    this.fileUtils.writeData(pets)
  }
}
