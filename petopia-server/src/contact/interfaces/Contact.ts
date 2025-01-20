export interface CreateContactDto {
    nombre: string;
    mensaje: string;
    telefono: string;
    email: string;
}
export interface ContactEntity extends CreateContactDto {
    id: string;
    createdAt: NativeDate;
}