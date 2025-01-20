import { SuggestionFormRepository } from '../interfaces/SuggestionForm.Repository';
import { CreateSuggestionDto } from '../interfaces/Suggestion';

export class SuggestionFormService {
    constructor(private repository: SuggestionFormRepository) {}

    async addSuggestion(
        mensaje: string,
    ): Promise<CreateSuggestionDto> {
        try {
            const suggestionData: CreateSuggestionDto = {
                mensaje
            };
            
            return await this.repository.save(suggestionData);
        } catch (error) {
            console.error('Error al guardar la sugerencia:', error);
            throw new Error('Error al procesar la solicitud de sugerencia');
        }
    }
}