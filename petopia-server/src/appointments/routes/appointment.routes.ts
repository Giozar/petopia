import { Request, Response, Router } from "express"
import { AppointmentRepositoryFile } from "../repositories/appointment.repository.file"
import { AppointmentService } from "../services/appointment.service"
import { AppointmentRepositoryMongoDB } from "../repositories/appointment.repository.mongodb"

const appointmentRoutes = Router()

const appointmentRepository = new AppointmentRepositoryFile()

// const appointmentRepository = new AppointmentRepositoryMongoDB()

const appointmentService = new AppointmentService(appointmentRepository)

appointmentRoutes.get('/', async (req: Request, res: Response) => {
  const appointments = await appointmentService.findAllAppointments()
  res.json(appointments)
})

appointmentRoutes.post('/', async (req: Request, res: Response) => {
  const newAppointment = await appointmentService.createAppointment(req.body)
  res.json(newAppointment)
})

appointmentRoutes.get('/:id', async (req: Request, res: Response) => {
  const appointment = await appointmentService.findOneAppointment(req.params.id)
  if (!appointment) return res.status(404).json({ message: 'Not found' })
  res.json(appointment)
})

appointmentRoutes.put('/:id', async (req: Request, res: Response) => {
  const updatedAppointment = await appointmentService.updateAppointment(req.params.id, req.body)
  if (!updatedAppointment) return res.status(404).json({ message: 'Not found' })
  res.json(updatedAppointment)
})

appointmentRoutes.delete('/:id', async (req: Request, res: Response) => {
  await appointmentService.deleteAppointment(req.params.id)
  res.sendStatus(204)
})

export { appointmentRoutes }
