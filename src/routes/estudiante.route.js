import {
  createEstudiante,
  deleteEstudiante,
  getEstudianteById,
  getEstudiantes,
  updateEstudiante
} from '../controllers/estudiante.controller.js';
import {
  getEstudentByEmpresa,
  getPracticeByStudent
} from '../controllers/reportes/estudiantes.report.js';

import { Router } from 'express';
const router = Router();

router.get('/all', getEstudiantes);
router.get('/:id', getEstudianteById);
router.put('/:id', updateEstudiante);
router.delete('/:id', deleteEstudiante);
router.post('/create', createEstudiante);

router.get('/:id/practicas', getPracticeByStudent);
router.get('/:id/estudiantes', getEstudentByEmpresa);

export default router;
