import { CreateProductDto, UpdateProductDto } from "./product.dto"

export interface ProductRepository {
  createProduct(data: CreateProductDto): Promise<CreateProductDto>
  findAllProducts(): Promise<CreateProductDto[]>
  findOneProduct(id: string): Promise<CreateProductDto | null>
  updateProduct(id: string, data: UpdateProductDto): Promise<CreateProductDto | null>
  deleteProduct(id: string): Promise<void>
}
