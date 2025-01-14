import { CartRepository } from "../interfaces/cart.repository";
import { CreateCartDto, UpdateCartDto } from "../interfaces/cart.dto";

export class CartService {
    constructor(private readonly cartRepository: CartRepository) {}

    createCart(data: CreateCartDto) {
        return this.cartRepository.createCart(data);
    }

    findAllCarts() {
        return this.cartRepository.findAllCarts();
    }

    findOneCart(id: string) {
        return this.cartRepository.findOneCart(id);
    }

    updateCart(id: string, data: UpdateCartDto) {
        return this.cartRepository.updateCart(id, data);
    }

    deleteCart(id: string) {
        return this.cartRepository.deleteCart(id);
    }
}