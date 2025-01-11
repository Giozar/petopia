import { ProductRepository } from 'src/products/interfaces/product.repository'
import { CreateProductDto, UpdateProductDto } from 'src/products/interfaces/product.dto'
import { FileRepositoryUtils } from 'src/utils/file.util'

export class ProductRepositoryFile implements ProductRepository {
  private fileUtils: FileRepositoryUtils

  constructor() {
    this.fileUtils = new FileRepositoryUtils({
      baseDir: 'data',
      fileName: 'products.json',
      initialData: []
    })
  }

  async createProduct(data: CreateProductDto) {
    const products = this.fileUtils.readData<CreateProductDto & { id: string }>()
    const newProduct = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date()
    }
    products.push(newProduct)
    this.fileUtils.writeData(products)
    return newProduct
  }

  async findAllProducts() {
    return this.fileUtils.readData<CreateProductDto & { id: string }>()
  }

  async findOneProduct(id: string) {
    const products = this.fileUtils.readData<CreateProductDto & { id: string }>()
    return products.find(product => product.id === id) || null
  }

  async updateProduct(id: string, data: UpdateProductDto) {
    const products = this.fileUtils.readData<(CreateProductDto & { id: string })>()
    const index = products.findIndex(product => product.id === id)
    if (index < 0) return null
    const existing = products[index]
    const updated = {
      ...existing,
      ...data,
      updatedAt: new Date()
    }
    products[index] = updated
    this.fileUtils.writeData(products)
    return updated
  }

  async deleteProduct(id: string) {
    let products = this.fileUtils.readData<CreateProductDto & { id: string }>()
    products = products.filter(product => product.id !== id)
    this.fileUtils.writeData(products)
  }
}
