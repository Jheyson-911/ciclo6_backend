import './models/asociaciones.js';
import authRoutes from './routes/auth.route.js';
import docenteRoutes from './routes/docente.route.js';
import documentoRoutes from './routes/documentos.route.js';
import empresaRoutes from './routes/empresa.route.js';
import convocatoriaRoutes from './routes/convocatoria.route.js';
import estudianteRoutes from './routes/estudiante.route.js';
import evaluacionRoutes from './routes/evaluacion.route.js';
import express from 'express';
import postRoutes from './routes/post.route.js';
import practicaRoutes from './routes/practica.route.js';
import reportesRoutes from './routes/reportes.route.js';
import representeRoutes from './routes/representante.route.js';
import solicitudRoutes from './routes/solicitud.route.js';
import userRoutes from './routes/user.route.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hi Welcome to mi Api for PY'
  });
});

app.use('/apiv1/auth', authRoutes);
app.use('/apiv1/user', userRoutes);
app.use('/apiv1/empresa', empresaRoutes);
app.use('/apiv1/convocatorias', convocatoriaRoutes);
app.use('/apiv1/estudiante', estudianteRoutes);
app.use('/apiv1/docente', docenteRoutes);
app.use('/apiv1/documento', documentoRoutes);
app.use('/apiv1/representante', representeRoutes);
app.use('/apiv1/solicitud', solicitudRoutes);
app.use('/apiv1/post', postRoutes);
app.use('/apiv1/evaluacion', evaluacionRoutes);
app.use('/apiv1/practica', practicaRoutes);
app.use('/apiv1/reportes', reportesRoutes);

export default app;
