import {Schema, model} from 'mongoose'
import { CreatePetDto } from '../interfaces/pet.dto';

const petSchema = new Schema<CreatePetDto>({
    userId: {type: String, required: true},
    name: {type: String, required: true},
    species: {type: String, required: true},
    age: {type: String, required: true},
    photos: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
}, {timestamps: true});

export const PetModel = model<CreatePetDto>('Pet', petSchema);