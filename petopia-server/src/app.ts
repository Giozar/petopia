import express, { Request, Response, NextFunction, RequestHandler } from 'express';
import * as soap from 'soap';
import * as fs from 'fs';
import * as path from 'path';
import { productRoutes } from './products/routes/product.routes';
import { userRoutes } from './users/routes/user.routes';
import { petRoutes } from './pets/routes/pet.routes';
import { cartRoutes } from './cart/routes/cart.routes';
import { appointmentRoutes } from './appointments/routes/appointment.routes';
import { soapService } from '../src/contact/soap/contact.controller';
import { soapServiceSuggestion } from '../src/suggestions/soap/suggestion.controller';
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
app.use('/carts', cartRoutes)

app.use('/appointments', appointmentRoutes)
const wsdl = fs.readFileSync(path.join(__dirname, '../wsdl/contactForm.wsdl'), 'utf8');
soap.listen(app, '/ContactService', soapService, wsdl);

const wsdlSuggestion = fs.readFileSync(path.join(__dirname, '../wsdl/suggestionForm.wsdl'), 'utf8');
soap.listen(app, '/SuggestionService', soapServiceSuggestion, wsdlSuggestion);

// Define rutas
app.get('/', (req: Request, res: Response) => {
    res.send('¡Servidor activo');
});
app.get('/ContactService', (req: Request, res: Response) => {
    res.send('¡Servidor activo');
});
app.get('/SuggestionService', (req: Request, res: Response) => {
    res.send('¡Servidor activo');
});



export default app;