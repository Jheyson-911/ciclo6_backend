/* Importing the bcryptjs library and the user model. */
import { Estudiante } from '../models/estudiante.model.js';
import { User } from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

/**
 * It takes the username, email and password from the request body, hashes the password,
 * creates a new user with the username, email, hashed password and a default role
 * of 'estudiante' and returns a message and the user data.
 * @param req - The request object.
 * @param res - The response object.
 */
export const register = async (req, res) => {
  const { username, email, password, rol, estado } = req.body;
  try {
    if (!username || !email || !password || !estado) {
      return res.json({
        message: 'Complete todos los campos'
      });
    }
    if (!rol) {
      const hash = bcrypt.hashSync(password, 10);
      const user = await User.create({
        username,
        email,
        password: hash,
        rol: 'estudiante',
        estado
      });
      return res.status(200).json({
        message: 'Usuario creado correctamente',
        data: user
      });
    }
    const hash = bcrypt.hashSync(password, 10);
    const user = await User.create({
      username,
      email,
      password: hash,
      rol,
      estado
    });
    return res.status(200).json({
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
      return res.status(206).json({
        message: 'Complete todos los campos'
      });
    }
    const user = await User.findOne({
      where: { username },
      include: Estudiante
    });
    if (!user > 0) {
      return res.status(404).json({
        message: 'Usuario no encontrado'
      });
    }
    if (user.estado !== 'activo') {
      return res.status(401).json({
        message: 'Usuario dado de baja'
      });
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({
        message: 'Contraseña incorrecta'
      });
    }
    const token = jwt.sign(
      {
        id: user.id,
        usuario: user.username,
        rol: user.rol,
        estado: user.estado,
        nombres: user.Estudiante.nombres,
        ap_paterno: user.Estudiante.ap_paterno,
        ap_materno: user.Estudiante.ap_materno,
        codigo: user.Estudiante.codigo
      },
      '123',
      {
        expiresIn: '30days'
      }
    );
    res.json({
      message: 'Bienvenido ' + user.username,
      data: token,
      user
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrio un error al iniciar sesion :' + e.message
    });
  }
};
