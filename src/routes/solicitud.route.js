import {
  createSolicitud,
  deleteSolicitud,
  getSolicitudes,
  getSolicitudesById,
  updateSolicitud
} from '../controllers/solicitud.controller.js';
import { Router } from 'express';

const router = new Router();

router.get('/all', getSolicitudes);
router.get('/:id', getSolicitudesById);
router.put('/:id', updateSolicitud);
router.delete('/:id', deleteSolicitud);
router.post('/:id', createSolicitud);

export default router;
