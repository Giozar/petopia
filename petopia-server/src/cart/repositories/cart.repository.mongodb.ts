import { CreateCartDto, UpdateCartDto } from "../interfaces/cart.dto";
import { CartRepository } from "../interfaces/cart.repository";
import { CartModel } from "../models/cart.model";

export class CartRepositoryMongoDB implements CartRepository {
    async createCart(data: CreateCartDto): Promise<CreateCartDto> {
        return CartModel.create(data);
    }

    async findAllCarts(): Promise<CreateCartDto[]> {
        const carts = await CartModel.find().lean();
        return carts.map(cart => ({
            ...cart,
            _id: cart._id.toString()
        }));
    }

    async findOneCart(id: string){
        return CartModel.findById(id);
    }

    async updateCart(id: string, data: UpdateCartDto) {
        const cart = await CartModel.findByIdAndUpdate(id, data, { 
            new: true 
        }).lean();
        return cart;
    }

    async deleteCart(id: string){
        await CartModel.findByIdAndDelete(id);
    }
}