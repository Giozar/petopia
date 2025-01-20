import { CreateNotificationDto, NotificationEntity } from './Notification';

export interface SubscribeNotificationRepository {
    save(data: CreateNotificationDto): Promise<NotificationEntity>;
}