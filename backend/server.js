import express from 'express';
import clothingRoutes from './routes/clothingRoutes.js';

const app = express();

app.use("/clothing", clothingRoutes);

const PORT = 8080;

app.get('/', (req, res) => {
    res.send('check server');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});