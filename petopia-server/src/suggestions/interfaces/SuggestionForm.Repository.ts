import { CreateSuggestionDto, SuggestionEntity } from "./Suggestion";

export interface SuggestionFormRepository {
    save(data: CreateSuggestionDto): Promise<SuggestionEntity>;
}