import { CreateAppointmentDto, UpdateAppointmentDto } from "../interfaces/appointment.dto"
import { AppointmentRepository } from "../interfaces/appointment.repository"
import { AppointmentModel } from "../models/appointment.model"


export class AppointmentRepositoryMongoDB implements AppointmentRepository {
  async createAppointment(data: CreateAppointmentDto) {
    return AppointmentModel.create(data)
  }

  async findAllAppointments() {
    return AppointmentModel.find()
  }

  async findOneAppointment(id: string) {
    return AppointmentModel.findById(id)
  }

  async updateAppointment(id: string, data: UpdateAppointmentDto) {
    return AppointmentModel.findByIdAndUpdate(id, data, { new: true })
  }

  async deleteAppointment(id: string) {
    await AppointmentModel.findByIdAndDelete(id)
  }
}
