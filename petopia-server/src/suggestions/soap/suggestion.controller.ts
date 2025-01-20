import * as soap from 'soap';
import { SuggestionFormService } from '../services/suggestionForm.service';
import { SuggestionFormRepositoryFile } from '../repositories/suggestionFormRepository.file';

const suggestionService = new SuggestionFormService(new SuggestionFormRepositoryFile());

export const soapServiceSuggestion = {
    SuggestionService: {
        SuggestionPort: {
            AddSuggestion: async function(args: { 
                mensaje: string;
            }) {
                try {
                    const guardadoExitoso = await suggestionService.addSuggestion(
                        args.mensaje,
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
                                Text: 'Error al procesar la solicitud de suggestiono'
                            }
                        }
                    };
                }
            }
        }
    }
};