import { Schema, model } from 'mongoose'
import { CreateProductDto } from '../interfaces/product.dto'

const productSchema = new Schema<CreateProductDto>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  inStock: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
},{ timestamps: true })

export const ProductModel = model<CreateProductDto>('Product', productSchema)
