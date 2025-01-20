import { CreateContactDto, ContactEntity } from "./Contact";

export interface ContactFormRepository {
    save(data: CreateContactDto): Promise<ContactEntity>;
}