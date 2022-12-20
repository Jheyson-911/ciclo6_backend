import {
  createConvocatoria,
  deleteConvocatoria,
  getConvocatoriaById,
  getConvocatorias,
  updateConvocatoria
} from '../controllers/convocatoria.controller.js';

import { Router } from 'express';

const router = Router();

router.get('/all', getConvocatorias);
router.get('/:id', getConvocatoriaById);
router.post('/create', createConvocatoria);
router.put('/:id', updateConvocatoria);
router.delete('/:id', deleteConvocatoria);

export default router;
