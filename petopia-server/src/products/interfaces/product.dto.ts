export interface CreateProductDto {
    name: string
    price: number
    category: string
    inStock: boolean
    createdAt: Date
    updatedAt: Date
  }
  
  export interface UpdateProductDto {
    name?: string
    price?: number
    category?: string
    inStock?: boolean
    updatedAt: Date
  }
  