import express from 'express';
import route from './routes/netflixRoutes.js';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Netflix API running 🎬' });
});

app.use('/api', route);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});