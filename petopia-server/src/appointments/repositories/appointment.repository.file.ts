import { FileRepositoryUtils } from "src/utils/file.util"
import { CreateAppointmentDto, UpdateAppointmentDto } from "../interfaces/appointment.dto"
import { AppointmentRepository } from "../interfaces/appointment.repository"


export class AppointmentRepositoryFile implements AppointmentRepository {
  private fileUtils: FileRepositoryUtils

  constructor() {
    this.fileUtils = new FileRepositoryUtils({
      baseDir: 'data',
      fileName: 'appointments.json',
      initialData: []
    })
  }

  async createAppointment(data: CreateAppointmentDto) {
    const appointments = this.fileUtils.readData<CreateAppointmentDto & { id: string }>()
    const newAppointment = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date()
    }
    appointments.push(newAppointment)
    this.fileUtils.writeData(appointments)
    return newAppointment
  }

  async findAllAppointments() {
    return this.fileUtils.readData<CreateAppointmentDto & { id: string }>()
  }

  async findOneAppointment(id: string) {
    const appointments = this.fileUtils.readData<CreateAppointmentDto & { id: string }>()
    return appointments.find(appointment => appointment.id === id) || null
  }

  async updateAppointment(id: string, data: UpdateAppointmentDto) {
    const appointments = this.fileUtils.readData<(CreateAppointmentDto & { id: string })>()
    const index = appointments.findIndex(appointment => appointment.id === id)
    if (index < 0) return null
    const existing = appointments[index]
    const updated = {
      ...existing,
      ...data,
      updatedAt: new Date()
    }
    appointments[index] = updated
    this.fileUtils.writeData(appointments)
    return updated
  }

  async deleteAppointment(id: string) {
    let appointments = this.fileUtils.readData<CreateAppointmentDto & { id: string }>()
    appointments = appointments.filter(appointment => appointment.id !== id)
    this.fileUtils.writeData(appointments)
  }
}
