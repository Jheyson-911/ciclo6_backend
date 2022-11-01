import {
  createRepresentante,
  deleteRepresentante,
  getRepresentanteById,
  getRepresentantes,
  updateRepresentante
} from '../controllers/representante.controller.js';
import { Router } from 'express';

const router = new Router();

router.get('/all', getRepresentantes);
router.get('/:id', getRepresentanteById);
router.put('/:id', updateRepresentante);
router.delete('/:id', deleteRepresentante);
router.post('/create', createRepresentante);

export default router;
