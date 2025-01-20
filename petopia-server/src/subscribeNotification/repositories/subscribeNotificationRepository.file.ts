import { FileRepositoryUtils } from "src/utils/file.util"
import { CreateNotificationDto, NotificationEntity } from "../interfaces/Notification"
import { SubscribeNotificationRepository } from "../interfaces/SubscribeNotificacion.Repository"

export class SubscribeNotificationRepositoryFile implements SubscribeNotificationRepository {
    private fileUtils: FileRepositoryUtils

    constructor() {
        this.fileUtils = new FileRepositoryUtils({
            baseDir: 'data',
            fileName: 'contactForms.json',
            initialData: []
        })
    }

    async save(data: CreateNotificationDto): Promise<NotificationEntity> {
        const SubscribeNotification = this.fileUtils.readData<NotificationEntity>()
        const newSubscribeNotification = {
        ...data,
            id: crypto.randomUUID(),
            createdAt: new Date()
        }
        SubscribeNotification.push(newSubscribeNotification)
        this.fileUtils.writeData(SubscribeNotification)
        return newSubscribeNotification
    }
}