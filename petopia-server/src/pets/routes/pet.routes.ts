import { Request, Response, Router } from "express"
import { PetRepositoryFile } from "../repositories/pet.repository.file"
import { PetService } from "../services/pet.service"
import { PetRepositoryMongoDB } from "../repositories/pet.repository.mongodb"

const petRoutes = Router()

const petRepository = new PetRepositoryFile()

// const petRepository = new PetRepositoryMongoDB()

const petService = new PetService(petRepository)

petRoutes.get('/', async (req: Request, res: Response) => {
  const pets = await petService.findAllPets()
  res.json(pets)
})

petRoutes.post('/', async (req: Request, res: Response) => {
  const newPet = await petService.createPet(req.body)
  res.json(newPet)
})

petRoutes.get('/:id', async (req: Request, res: Response) => {
  const pet = await petService.findOnePet(req.params.id)
  if (!pet) return res.status(404).json({ message: 'Not found' })
  res.json(pet)
})

petRoutes.put('/:id', async (req: Request, res: Response) => {
  const updatedPet = await petService.updatePet(req.params.id, req.body)
  if (!updatedPet) return res.status(404).json({ message: 'Not found' })
  res.json(updatedPet)
})

petRoutes.delete('/:id', async (req: Request, res: Response) => {
  await petService.deletePet(req.params.id)
  res.sendStatus(204)
})

export { petRoutes }
