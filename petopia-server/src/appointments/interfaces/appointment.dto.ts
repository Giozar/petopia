export interface CreateAppointmentDto { 
  userId: String,
  petId: String,
  date: Date,
  reason: String,
  status:String,
  createdAt: Date,
  updatedAt: Date,
}

export interface UpdateAppointmentDto {
  userId?: String,
  petId?: String,
  date?: Date,
  reason?: String,
  status?:String,
}
