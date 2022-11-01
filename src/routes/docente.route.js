import {
  createDocente,
  deleteDocente,
  getActiveDocente,
  getDocenteById,
  getDocentes,
  updateDocente
} from '../controllers/docente.controller.js';

import { Router } from 'express';
import { verifyToken } from '../middlewares/jwtVerify.middleware.js';

const router = Router();

router.get('/all', verifyToken, getDocentes);
router.get('/active', getActiveDocente);
router.get('/:id', getDocenteById);
router.put('/:id', updateDocente);
router.delete('/:id', deleteDocente);
router.post('/create', createDocente);

export default router;
