export interface ConnectionRepository {
    connect(): Promise<boolean>;
  }