import { Request, Response, Router } from "express";
import { CartRepositoryFile } from "../repositories/cart.repository.file";
import { CartService } from "../services/cart.service";
import { CartRepositoryMongoDB } from "../repositories/cart.repository.mongodb";

const cartRoutes = Router();

const cartRepository = new CartRepositoryFile();

// const cartRepository = new CartRepositoryMongoDB();

const cartService = new CartService(cartRepository);

cartRoutes.get('/', async (req: Request, res: Response) => {
  const carts = await cartService.findAllCarts();
  res.json(carts);
});

cartRoutes.post('/', async (req: Request, res: Response) => {
  const newCart = await cartService.createCart(req.body);
  res.json(newCart);
});

cartRoutes.get('/:id', async (req: Request, res: Response) => {
  const cart = await cartService.findOneCart(req.params.id);
  if (!cart) return res.status(404).json({ message: 'Not found' });
  res.json(cart);
});

cartRoutes.put('/:id', async (req: Request, res: Response) => {
  const updatedCart = await cartService.updateCart(req.params.id, req.body);
  if (!updatedCart) return res.status(404).json({ message: 'Not found' });
  res.json(updatedCart);
});

cartRoutes.delete('/:id', async (req: Request, res: Response) => {
  await cartService.deleteCart(req.params.id);
  res.sendStatus(204);
});

export { cartRoutes };