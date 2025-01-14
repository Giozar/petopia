import {Schema, model} from 'mongoose'
import { CreateAppointmentDto } from '../interfaces/appointment.dto';

const appointmentSchema = new Schema<CreateAppointmentDto>({
    userId: {type: String, required: true},
    petId: {type: String, required: true},
    date: {type: Date, required: true},
    reason: {type: String, required: true},
    status: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
}, {timestamps: true});

export const AppointmentModel = model<CreateAppointmentDto>('Appointment', appointmentSchema);