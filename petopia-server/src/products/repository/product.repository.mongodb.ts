import { ProductRepository } from "src/products/interfaces/product.repository"
import { ProductModel } from "src/products/models/product.model"
import { CreateProductDto, UpdateProductDto } from "../interfaces/product.dto"

export class ProductRepositoryMongoDB implements ProductRepository {
  async createProduct(data: CreateProductDto) {
    return ProductModel.create(data)
  }

  async findAllProducts() {
    return ProductModel.find()
  }

  async findOneProduct(id: string) {
    return ProductModel.findById(id)
  }

  async updateProduct(id: string, data: UpdateProductDto) {
    return ProductModel.findByIdAndUpdate(id, data, { new: true })
  }

  async deleteProduct(id: string) {
    await ProductModel.findByIdAndDelete(id)
  }
}
