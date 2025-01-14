import { AppointmentRepository } from '../interfaces/appointment.repository'
import { CreateAppointmentDto, UpdateAppointmentDto } from '../interfaces/appointment.dto'

export class AppointmentService {
  constructor(private readonly appointmentRepository: AppointmentRepository) {}

  createAppointment(data: CreateAppointmentDto) {
    return this.appointmentRepository.createAppointment(data)
  }

  findAllAppointments() {
    return this.appointmentRepository.findAllAppointments()
  }

  findOneAppointment(id: string) {
    return this.appointmentRepository.findOneAppointment(id)
  }

  updateAppointment(id: string, data: UpdateAppointmentDto) {
    return this.appointmentRepository.updateAppointment(id, data)
  }

  deleteAppointment(id: string) {
    return this.appointmentRepository.deleteAppointment(id)
  }
}
