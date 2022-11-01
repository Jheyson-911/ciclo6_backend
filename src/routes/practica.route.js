import {
  createPractica,
  deletePractica,
  getPracticas,
  getPracticasById,
  updatePractica
} from '../controllers/practica.controller.js';

import { Router } from 'express';

const router = new Router();

router.get('/all', getPracticas);
router.get('/:id', getPracticasById);
router.put('/:id', updatePractica);
router.delete('/:id', deletePractica);
router.post('/create', createPractica);

export default router;
