export interface CreateSuggestionDto {
    mensaje: string;
    
}
export interface SuggestionEntity extends CreateSuggestionDto {
    id: string;
    createdAt: NativeDate;
}