import * as soap from 'soap';
import { SubscribeNotificationService } from '../services/subscribeNotification.service';
import { SubscribeNotificationRepositoryFile } from '../repositories/subscribeNotificationRepository.file';

const notificationService = new SubscribeNotificationService(
    new SubscribeNotificationRepositoryFile()
);

export const soapService = {
    NotificationService: {  // Cambio de ContactService a NotificationService
        NotificationPort: {  // Cambio de ContactPort a NotificationPort
            SubscribeNotification: async function(args: { email: string }) {
                try {
                    const guardadoExitoso = await notificationService.subscribeNotification(
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
                                Text: 'Error al procesar la suscripción'
                            }
                        }
                    };
                }
            }
        }
    }
};