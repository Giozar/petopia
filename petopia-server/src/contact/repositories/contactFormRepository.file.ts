import { FileRepositoryUtils } from "src/utils/file.util"
import { CreateContactDto, ContactEntity } from "../interfaces/Contact"
import { ContactFormRepository } from "../interfaces/ContactForm.Repository"

export class ContactFormRepositoryFile implements ContactFormRepository {
    private fileUtils: FileRepositoryUtils

    constructor() {
        this.fileUtils = new FileRepositoryUtils({
            baseDir: 'data',
            fileName: 'contactForms.json',
            initialData: []
        })
    }
    
    async save(data: CreateContactDto): Promise<ContactEntity> {
        const ContactForms = this.fileUtils.readData<ContactEntity>()
        const newContactForm: ContactEntity = {
            ...data,
            id: crypto.randomUUID(),
            createdAt: new Date()
        }
        ContactForms.push(newContactForm)
        this.fileUtils.writeData(ContactForms)
        return newContactForm
    }
}