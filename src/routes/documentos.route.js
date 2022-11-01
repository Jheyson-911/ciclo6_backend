import {
  createDocumentos,
  getDocumentos,
  getDocumentosById,
  updateDocumentos
} from '../controllers/documentos.controller.js';
import { Router } from 'express';

const router = Router();

router.get('/all', getDocumentos);
router.get('/:id', getDocumentosById);
router.put('/:id', updateDocumentos);
router.post('/create', createDocumentos);

export default router;
