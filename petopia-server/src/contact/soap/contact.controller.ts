import * as soap from 'soap';
import { ContactFormService } from '../services/contactForm.service';
import { ContactFormRepositoryFile } from '../repositories/contactFormRepository.file';

const contactService = new ContactFormService(new ContactFormRepositoryFile());

export const soapService = {
    ContactService: {
        ContactPort: {
            AddContact: async function(args: { 
                nombre: string;
                mensaje: string;
                telefono: string;
                email: string;
            }) {
                try {
                    const guardadoExitoso = await contactService.addContact(
                        args.nombre,
                        args.mensaje,
                        args.telefono,
                        args.email
                    );
                    
                    return {
                        guardadoExitoso
                    };
                } catch (error) {
                    throw {
                        Fault: {
                            Code: {
                                Value: 'soap:Server'
                            },
                            Reason: {
                                Text: 'Error al procesar la solicitud de contacto'
                            }
                        }
                    };
                }
            }
        }
    }
};