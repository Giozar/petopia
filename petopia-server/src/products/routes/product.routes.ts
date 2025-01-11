import { Router, Request, Response } from 'express'
import { ProductService } from '../services/product.service'
import { ProductRepositoryMongoDB } from '../repository/product.repository.mongodb'

const productRoutes = Router()
const productRepository = new ProductRepositoryMongoDB()
const productService = new ProductService(productRepository)

productRoutes.get('/', async (req: Request, res: Response) => {
  const products = await productService.findAllProducts()
  res.json(products)
})

productRoutes.post('/', async (req: Request, res: Response) => {
  const newProduct = await productService.createProduct(req.body)
  res.json(newProduct)
})

productRoutes.get('/:id', async (req: Request, res: Response) => {
  const product = await productService.findOneProduct(req.params.id)
  if (!product) return res.status(404).json({ message: 'Not found' })
  res.json(product)
})

productRoutes.put('/:id', async (req: Request, res: Response) => {
  const updatedProduct = await productService.updateProduct(req.params.id, req.body)
  if (!updatedProduct) return res.status(404).json({ message: 'Not found' })
  res.json(updatedProduct)
})

productRoutes.delete('/:id', async (req: Request, res: Response) => {
  await productService.deleteProduct(req.params.id)
  res.sendStatus(204)
})

export { productRoutes }
