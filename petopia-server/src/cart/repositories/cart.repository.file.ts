import { FileRepositoryUtils } from "src/utils/file.util";
import { CreateCartDto, UpdateCartDto } from "../interfaces/cart.dto";
import { CartRepository } from "../interfaces/cart.repository";

export class CartRepositoryFile implements CartRepository {
    private fileUtils: FileRepositoryUtils

    constructor() {
        this.fileUtils = new FileRepositoryUtils({
            baseDir: 'data',
            fileName: 'carts.json',
            initialData: []
        })
    }

    async createCart(data: CreateCartDto): Promise<CreateCartDto> {
        const carts = this.fileUtils.readData<CreateCartDto & { id: string }>()
        const newCart = {
            ...data,
            id: crypto.randomUUID(),
            createdAt: new Date(),
            updatedAt: new Date()
        }
        carts.push(newCart)
        this.fileUtils.writeData(carts)
        return newCart
    }
    
    async findAllCarts(): Promise<CreateCartDto[]> {
        return this.fileUtils.readData<CreateCartDto>()
    }
    
    async findOneCart(id: string): Promise<CreateCartDto | null> {
        const carts = this.fileUtils.readData<CreateCartDto & { id: string }>()
        return carts.find(cart => cart.id === id) || null
    }
    
    async updateCart(id: string, data: UpdateCartDto): Promise<CreateCartDto | null> {
        const carts = this.fileUtils.readData<CreateCartDto & { id: string }>()
        const index = carts.findIndex(cart => cart.id === id)
        if (index < 0) return null
        const existing = carts[index]
        const updated = {
            ...existing,
            ...data,
            updatedAt: new Date()
        }
        carts[index] = updated
        this.fileUtils.writeData(carts)
        return updated
    }
    
    async deleteCart(id: string): Promise<void> {
        let carts = this.fileUtils.readData<CreateCartDto & { id: string }>()
        carts = carts.filter(cart => cart.id !== id)
        this.fileUtils.writeData(carts)
    }
}