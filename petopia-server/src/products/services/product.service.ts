import { ProductRepository } from '../interfaces/product.repository'
import { CreateProductDto, UpdateProductDto } from '../interfaces/product.dto'

export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  createProduct(data: CreateProductDto) {
    return this.productRepository.createProduct(data)
  }

  findAllProducts() {
    return this.productRepository.findAllProducts()
  }

  findOneProduct(id: string) {
    return this.productRepository.findOneProduct(id)
  }

  updateProduct(id: string, data: UpdateProductDto) {
    return this.productRepository.updateProduct(id, data)
  }

  deleteProduct(id: string) {
    return this.productRepository.deleteProduct(id)
  }
}
