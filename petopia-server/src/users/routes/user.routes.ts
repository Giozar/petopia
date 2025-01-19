import { Request, Response, Router } from "express"
import { UserRepositoryFile } from "../repositories/user.repository.file"
import { UserService } from "../services/user.service"
import { UserRepositoryMongoDB } from "../repositories/user.repository.mongodb"

const userRoutes = Router()

const userRepository = new UserRepositoryFile()

/** Descomenta la siguiente línea para usar la base de datos */
// const userRepository = new UserRepositoryMongoDB()

const userService = new UserService(userRepository)

userRoutes.get('/', async (req: Request, res: Response) => {
  const users = await userService.findAllUsers()
  res.json(users)
})

userRoutes.post('/', async (req: Request, res: Response) => {
  const newUser = await userService.createUser(req.body)
  res.json(newUser)
})

userRoutes.post('/login', async (req: Request, res: Response) => {
  const newUser = await userService.loginUser(req.body);
  res.json(newUser)
})

userRoutes.get('/:id', async (req: Request, res: Response) => {
  const user = await userService.findOneUser(req.params.id)
  if (!user) return res.status(404).json({ message: 'Not found' })
  res.json(user)
})

userRoutes.put('/:id', async (req: Request, res: Response) => {
  const updatedUser = await userService.updateUser(req.params.id, req.body)
  if (!updatedUser) return res.status(404).json({ message: 'Not found' })
  res.json(updatedUser)
})

userRoutes.delete('/:id', async (req: Request, res: Response) => {
  await userService.deleteUser(req.params.id)
  res.sendStatus(204)
})

export { userRoutes }
