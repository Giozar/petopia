import { CreateAppointmentDto, UpdateAppointmentDto } from "./appointment.dto"


export interface AppointmentRepository {
  createAppointment(data: CreateAppointmentDto): Promise<CreateAppointmentDto>
  findAllAppointments(): Promise<CreateAppointmentDto[]>
  findOneAppointment(id: string): Promise<CreateAppointmentDto | null>
  updateAppointment(id: string, data: UpdateAppointmentDto): Promise<CreateAppointmentDto | null>
  deleteAppointment(id: string): Promise<void>
}
