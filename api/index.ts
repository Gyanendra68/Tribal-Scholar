import express, { Request, Response } from 'express';
import { initDatabase } from '../server/db.js';
import { apiRouter } from '../server/routes.js';

const app = express();

app.use(express.json({ limit: '15mb' }));
app.use(express.urlencoded({ extended: true, limit: '15mb' }));

app.use('/api', apiRouter);

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'TribalScholar Backend',
    timestamp: new Date().toISOString()
  });
});

let initialization: Promise<void> | null = null;

export default async function handler(req: Request, res: Response) {
  if (!initialization) {
    initialization = initDatabase();
  }

  try {
    await initialization;
    return app(req, res);
  } catch (error) {
    console.error('[TribalScholar] API initialization failed:', error);
    initialization = null;

    return res.status(500).json({
      error: 'Backend initialization failed'
    });
  }
}