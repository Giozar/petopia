import { SubscribeNotificationRepository } from "../interfaces/SubscribeNotificacion.Repository";
import { CreateNotificationDto } from "../interfaces/Notification"; 

export class SubscribeNotificationService {
    constructor(private repository: SubscribeNotificationRepository) {}

    async subscribeNotification(email: string): Promise<boolean> {
        try {
            const notificationData: CreateNotificationDto = {
                email
            };
            
            const result = await this.repository.save(notificationData);
            return result ? true : false;
        } catch (error) {
            console.error('Error al guardar la suscripción:', error);
            throw new Error('Error al procesar la solicitud de suscripción');
        }
    }
}