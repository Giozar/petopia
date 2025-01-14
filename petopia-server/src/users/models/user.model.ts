import {Schema, model} from 'mongoose'
import { CreateUserDto } from '../interfaces/user.dto';

const userSchema = new Schema<CreateUserDto>({
    lastName: {type: String, required: true},
    firstName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
}, {timestamps: true});

export const UserModel = model<CreateUserDto>('User', userSchema);