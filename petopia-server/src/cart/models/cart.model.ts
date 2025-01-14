import { Schema, model } from 'mongoose';
import { CartItem } from '../interfaces/cart.dto';

const cartItemSchema = new Schema<CartItem>({
    productId: { type: String, required: true },
    quantity: { type: Number, required: true }
});

const cartSchema = new Schema({
    userId: { type: String, required: true },
    items: { type: [cartItemSchema], required: true },
    createdAt: {type: NativeDate, default: Date.now},
    updatedAt: {type: NativeDate, default: Date.now}
}, { timestamps: true });

export const CartModel = model('Cart', cartSchema);