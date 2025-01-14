import express, { Request, Response, NextFunction, RequestHandler } from 'express';
import { productRoutes } from './products/routes/product.routes';
import { userRoutes } from './users/routes/user.routes';
import { petRoutes } from './pets/routes/pet.routes';
import { appointmentRoutes } from './appointments/routes/appointment.routes';

const app = express();

// Middleware para manejar CORS
const corsMiddleware: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        res.status(204).end();
        return;
    }

    next(); // Llama al siguiente middleware
};

// Usa el middleware
app.use(corsMiddleware);

// Configura middleware adicional
app.use(express.json());

app.use('/products', productRoutes)

app.use('/users', userRoutes)
app.use('/pets', petRoutes)
app.use('/appointments', appointmentRoutes)

// Define rutas
app.get('/', (req: Request, res: Response) => {
    res.send('¡Servidor activo');
});



export default app;