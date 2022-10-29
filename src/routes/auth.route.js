/* Importing the Router from express and the login and register functions
from the auth.controller.js file. */
import { login, register } from '../controllers/auth.controller.js';
import { Router } from 'express';

/* Creating a new instance of the Router class. */
const router = Router();

/* Creating a route for the login and register functions. */
router.post('/login', login);
router.post('/register', register);

/* Exporting the router object. */
export default router;
