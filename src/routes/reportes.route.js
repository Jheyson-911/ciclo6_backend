import {
  documentoByPractica,
  enproceso,
  evaluacionByPractica,
  finalizado,
  getEstudentByEmpresa,
  getPracticeByStudent,
  misHorasPractica,
  noInicio
} from '../controllers/reportes/estudiantes.report.js';

import { Router } from 'express';
const router = Router();

router.get('/:id/practicas', getPracticeByStudent);
router.get('/:id/estudiantes', getEstudentByEmpresa);
router.get('/:id/documentos', documentoByPractica);
router.get('/:id/evaluaciones', evaluacionByPractica);
router.get('/proceso', enproceso);
router.get('/finalizado', finalizado);
router.get('/noinicio', noInicio);
router.get('/:id/mishoras', misHorasPractica);

export default router;
