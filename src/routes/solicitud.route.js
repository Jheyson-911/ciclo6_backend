import {
  createSolicitud,
  deleteSolicitud,
  getSolicitudes,
  getSolicitudesById,
  updateSolicitud
} from '../controllers/solicitud.controller.js';
import { Router } from 'express';
import { verifyToken } from '../middlewares/jwtVerify.middleware.js';

const router = new Router();

router.get('/all', getSolicitudes);
router.get('/:id', getSolicitudesById);
router.put('/:id', updateSolicitud);
router.delete('/:id', deleteSolicitud);
router.post('/create', createSolicitud);

export default router;
