import app from "./app";
import { PORT } from "./configs/server.config";
import { MongoConnection } from "./repositories/mongodb.respository";

app.listen(PORT, async () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
    const mongoConnection = MongoConnection.getInstance();

// Conectar a la DB
const isConnected = await mongoConnection.connect();
if (!isConnected) {
  return {
    statusCode: 500,
    body: JSON.stringify({ message: 'Database connection failed' }),
  };
}
});