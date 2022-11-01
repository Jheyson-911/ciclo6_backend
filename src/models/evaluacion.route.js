import {
  createEvaluacion,
  deleteEvaluacion,
  getEvaluacionById,
  getEvaluaciones,
  updateEvaluacion
} from '../controllers/evaluacion.controller.js';

import { Router } from 'express';

const router = new Router();

router.get('/all', getEvaluaciones);
router.get('/:id', getEvaluacionById);
router.put('/:id', updateEvaluacion);
router.delete('/:id', deleteEvaluacion);
router.post('/create', createEvaluacion);

export default router;
