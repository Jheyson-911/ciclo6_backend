/* Importing the bcryptjs library and the user model. */
import { User } from '../models/user.model.js';
import bcrypt from 'bcryptjs';

/**
 * It takes the username, email and password from the request body, hashes the password,
 * creates a new user with the username, email, hashed password and a default role
 * of 'estudiante' and returns a message and the user data.
 * @param req - The request object.
 * @param res - The response object.
 */
export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      res.json({
        message: 'Complete todos los campos'
      });
    }
    const hash = bcrypt.hashSync(password, 10);
    const user = await User.create({
      username,
      email,
      password: hash,
      rol: 'estudiante'
    });
    res.json({
      message: 'Usuario creado correctamente',
      data: user
    });
  } catch (e) {
    res.json({
      message: 'Ocurrio un error al crear el usuario: ' + e.message
    });
  }
};

/**
 * It takes the username and password from the request body, checks if they are empty, if not, it
 * checks if the user exists in the database, if it does, it checks if the password is correct,
 * if it is, it returns a welcome message and the user data.
 * </code>
 * @param req - The request object.
 * @param res - The response object.
 */
export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      res.json({
        message: 'Complete todos los campos'
      });
    }
    const user = await User.findOne({ where: { username } });
    if (!user > 0) {
      res.json({
        message: 'Usuario no encontrado'
      });
    }
    if (!bcrypt.compareSync(password, user.password)) {
      res.json({
        message: 'Contraseña incorrecta'
      });
    }

    res.json({
      message: 'Bienvenido ' + user.username,
      data: user
    });
  } catch (e) {
    res.json({
      message: 'Ocurrio un error al iniciar sesion :' + e.message
    });
  }
};
