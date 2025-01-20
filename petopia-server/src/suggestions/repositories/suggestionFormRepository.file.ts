import { FileRepositoryUtils } from "src/utils/file.util"
import { CreateSuggestionDto, SuggestionEntity } from "../interfaces/Suggestion"
import { SuggestionFormRepository } from "../interfaces/SuggestionForm.Repository"

export class SuggestionFormRepositoryFile implements SuggestionFormRepository {
    private fileUtils: FileRepositoryUtils

    constructor() {
        this.fileUtils = new FileRepositoryUtils({
            baseDir: 'data',
            fileName: 'suggestionForms.json',
            initialData: []
        })
    }
    
    async save(data: CreateSuggestionDto): Promise<SuggestionEntity> {
        const SuggestionForms = this.fileUtils.readData<SuggestionEntity>()
        const newSuggestionForm: SuggestionEntity = {
            ...data,
            id: crypto.randomUUID(),
            createdAt: new Date()
        }
        SuggestionForms.push(newSuggestionForm)
        this.fileUtils.writeData(SuggestionForms)
        return newSuggestionForm
    }
}