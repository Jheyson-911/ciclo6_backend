/* It's importing the User model from the user.model.js file. */
import { User } from '../models/user.model.js';

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
    if (!id) {
      return res.status(206).json({
        message: 'Debe enviar el id para buscar el usuario'
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
