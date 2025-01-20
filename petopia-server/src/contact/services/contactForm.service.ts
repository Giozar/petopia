import { ContactFormRepository } from '../interfaces/ContactForm.Repository';
import { CreateContactDto } from '../interfaces/Contact';

export class ContactFormService {
    constructor(private repository: ContactFormRepository) {}

    async addContact(
        nombre: string,
        mensaje: string,
        telefono: string,
        email: string
    ): Promise<CreateContactDto> {
        try {
            const contactData: CreateContactDto = {
                nombre: nombre, // Mapeo del nombre del WSDL a la interfaz
                mensaje,
                telefono,
                email
            };
            
            return await this.repository.save(contactData);
        } catch (error) {
            console.error('Error al guardar el contacto:', error);
            throw new Error('Error al procesar la solicitud de contacto');
        }
    }
}