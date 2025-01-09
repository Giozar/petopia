import mongoose from 'mongoose';
import { ConnectionRepository } from './interfaces/connection.repository';
import { DB_HOST } from 'src/configs/database.config';

export class MongoConnection implements ConnectionRepository {

  private static instance: MongoConnection;

  private constructor() {}

  public static getInstance(): MongoConnection {
    if (!MongoConnection.instance) {
      MongoConnection.instance = new MongoConnection();
    }
    return MongoConnection.instance;
  }

  public async connect(): Promise<boolean> {
    if (!DB_HOST) {
      console.error('DB_HOST is not defined in environment variables');
      return false;
    }

    // Verificamos el estado actual de la conexión de mongoose:
    // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
    if (mongoose.connection.readyState === 1 || mongoose.connection.readyState === 2) {
      console.log('MongoDB is already connected or connecting.');
      return true;
    }

    try {
      await mongoose.connect(DB_HOST);
      console.log('MongoDB connected successfully');
      return true;
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      return false;
    }
  }
}