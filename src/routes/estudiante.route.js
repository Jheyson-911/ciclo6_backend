import {
  createEstudiante,
  deleteEstudiante,
  getEstudianteById,
  getEstudiantes,
  updateEstudiante
} from '../controllers/estudiante.controller.js';

import { Router } from 'express';

const router = Router();

router.get('/all', getEstudiantes);
router.get('/:id', getEstudianteById);
router.put('/:id', updateEstudiante);
router.delete('/:id', deleteEstudiante);
router.post('/create', createEstudiante);

export default router;
