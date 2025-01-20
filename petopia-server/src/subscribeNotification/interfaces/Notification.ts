export interface CreateNotificationDto {
    email: string;
}
export interface NotificationEntity extends CreateNotificationDto {
    id: string;
    createdAt: NativeDate;
}