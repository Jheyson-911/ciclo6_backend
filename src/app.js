import './models/asociaciones.js';
import authRoutes from './routes/auth.route.js';
import express from 'express';
import userRoutes from './routes/user.route.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hi Welcome to mi Api for PY'
  });
});

app.use('/apiv1/auth', authRoutes);
app.use('apiv1/user', userRoutes);

export default app;
