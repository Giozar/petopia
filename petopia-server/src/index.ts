import express from 'express';
import { port } from './configs/config';
const app = express();

app.listen( port, () => {
    console.log(`Server running on port ${port}`);
})