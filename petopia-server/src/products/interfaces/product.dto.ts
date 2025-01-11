export interface CreateProductDto {
    name: string
    description: string
    price: number
    category: string
    stock: number
    species: Array<string>
    createdAt: Date
    updatedAt: Date
  }
  
  export interface UpdateProductDto {
    name?: string
    description?: string
    price?: number
    category?: string
    stock?: number
    species?: Array<string>
    updatedAt: Date
  }
  