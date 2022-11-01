import {
  createDocente,
  deleteDocente,
  getDocenteById,
  getDocentes,
  updateDocente
} from '../controllers/docente.controller.js';

import { Router } from 'express';

const router = Router();

router.get('/all', getDocentes);
router.get('/:id', getDocenteById);
router.put('/:id', updateDocente);
router.delete('/:id', deleteDocente);
router.post('/create', createDocente);

export default router;
