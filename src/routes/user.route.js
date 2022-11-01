/* Importing the userController and Router from the user.controller.js and express. */
import {
  getActiveUsers,
  getUserById,
  getUsers,
  updateUser
} from '../controllers/user.controller.js';
import { Router } from 'express';

/* Creating a new instance of the Router class. */
const router = Router();

/* This is a route. It is a way to get data from the server. */
router.get('/all', getUsers);
router.get('/active', getActiveUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);

export default router;
