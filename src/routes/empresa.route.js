import {
  createEmpresa,
  deleteEmpresa,
  getEmpresaById,
  getEmpresas,
  updateEmpresa
} from '../controllers/empresa.controller.js';

import { Router } from 'express';

const router = Router();

router.get('/all', getEmpresas);
router.get('/:id', getEmpresaById);
router.post('/create', createEmpresa);
router.put('/:id', updateEmpresa);
router.delete('/:id', deleteEmpresa);

export default router;
