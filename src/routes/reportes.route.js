import {
  documentoByPractica,
  enproceso,
  evaluacionByPractica,
  getEstudentByEmpresa,
  getPracticeByStudent,
  misHorasPractica
} from '../controllers/reportes/estudiantes.report.js';

import { Router } from 'express';
const router = Router();

router.get('/:id/practicas', getPracticeByStudent);
router.get('/:id/estudiantes', getEstudentByEmpresa);
router.get('/:id/documentos', documentoByPractica);
router.get('/:id/evaluaciones', evaluacionByPractica);
router.get('/:id/proceso', enproceso);
router.get('/:id/mishoras', misHorasPractica);

export default router;
