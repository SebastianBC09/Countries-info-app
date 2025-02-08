import express from 'express';
import cors from 'cors';
import { config } from './config/env.config';
import countryRoutes from './routes/country.routes';

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: config.allowedOrigins,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  })
);

app.use('/api/countries', countryRoutes);

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use(
  (
    err: Error,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).json({
      error: 'Internal server error',
      message: err.message,
    });
  }
);

const port = config.port;
app.listen(port, () => {
  console.warn(`Server running on port ${port}`);
});

export default app;
