/* It's importing the User model from the user.model.js file. */
import { User } from '../models/user.model.js';
import bcrypt from 'bcryptjs';
/**
 * It's a function that returns a promise that resolves to a list of users.
 * @param req - The request object.
 * @param res - The response object.
 */
export const getUsers = async (req, res) => {
  try {
    const user = await User.findAll();
    if (!user === null) {
      return res.status(404).json({
        message: 'No se encontraron usuarios'
      });
    }
    res.status(200).json({
      message: 'Lista de usuarios',
      data: user
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrio un error al listar los usuarios: ' + e.message
    });
  }
};

/**
 * It gets a user by id from the database and returns it in a json format
 * @param req - The request object.
 * @param res - The response object.
 */
export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    if (!(id > 0)) {
      return res.status(403).json({
        message: 'Ingrese un id valido'
      });
    }
    const user = await User.findOne({ where: { id } });
    res.status(200).json({
      message: 'Usuario encontrado',
      data: user
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrio un error al buscar el usuario: ' + e.message
    });
  }
};

export const getActiveUsers = async (req, res) => {
  try {
    const activeUsers = await User.findAll({ where: { estado: 'activo' } });
    if (!activeUsers.length > 0) {
      return res.status(404).json({
        message: 'No se encontraron usuarios'
      });
    }
    res.status(200).json({
      message: 'Lista de usuarios activos',
      data: activeUsers
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrió un error al obtener los usuarios activos ' + e.message
    });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, email, password, rol, estado } = req.body;
  try {
    if (!(id > 0)) {
      return res.status(403).json({
        message: 'Ingrese un id valido'
      });
    }
    if (!username || !email || !password || !rol || !estado) {
      return res.status(403).json({
        message: 'Complete todos los campos'
      });
    }

    const hash = bcrypt.hashSync(password, 10);
    const user = await User.update(
      { username, email, password: hash, rol, estado },
      { where: { id } }
    );
    res.status(200).json({
      message: 'Usuario actualizado correctamente',
      data: user
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrio un error al actualiuzar el usuario ' + e.message
    });
  }
};
