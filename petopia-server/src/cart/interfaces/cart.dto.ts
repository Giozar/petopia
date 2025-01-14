export interface CartItem {
    productId: string;
    quantity: number;
}

export interface CreateCartDto {
    userId: string;
    items: CartItem[];
    createdAt: NativeDate;
    updatedAt: NativeDate;
}

export interface UpdateCartDto {
    userId?: string;
    items?: CartItem[];
}
