import { CreateCartDto, UpdateCartDto } from "./cart.dto";

export interface CartRepository {
    createCart(data: CreateCartDto): Promise<CreateCartDto>
    findAllCarts(): Promise<CreateCartDto[]>
    findOneCart(id: string): Promise<CreateCartDto | null>
    updateCart(id: string, data: UpdateCartDto): Promise<CreateCartDto | null>
    deleteCart(id: string): Promise<void>
}