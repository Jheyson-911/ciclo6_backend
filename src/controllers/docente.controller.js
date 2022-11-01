/* Importing the Docente model from the docente.model.js file. */
import { Docente } from '../models/docente.model.js';

/**
 * It's a function that gets all the docentes from the database and returns them in a JSON format.
 * @param req - The request object.
 * @param res - The response object.
 */
export const getDocentes = async (req, res) => {
  try {
    let docentes = await Docente.findAll();
    if (!docentes === null) {
      return res.status(404).json({
        message: 'No se encontraron docentes'
      });
    }
    res.status(200).json({
      message: 'Lista de docentes',
      data: docentes
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrio un error al listar los docentes ' + e.message
    });
  }
};

/**
 * It creates a new docente (teacher) in the database.
 * @param req - request
 * @param res - the response object
 */
export const createDocente = async (req, res) => {
  const {
    nombres,
    ap_paterno,
    ap_materno,
    grado_acedemico,
    area_encargada,
    dni,
    edad,
    sexo,
    telefono,
    estado,
    fk_userId
  } = req.body;
  try {
    if (
      !nombres ||
      !ap_paterno ||
      !ap_materno ||
      !grado_acedemico ||
      !area_encargada ||
      !dni ||
      !edad ||
      !sexo ||
      !telefono ||
      !estado ||
      !fk_userId
    ) {
      return res.status(206).json({
        message: 'Complete todos los campos'
      });
    }
    const docente = await Docente.create({
      nombres,
      ap_paterno,
      ap_materno,
      grado_acedemico,
      area_encargada,
      dni,
      edad,
      sexo,
      telefono,
      estado,
      fk_userId
    });
    res.status(200).json({
      message: 'Docente creado correctamente',
      data: docente
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrio un error al crear el docente ' + e.message
    });
  }
};

/**
 * It updates the docente table with the values of the parameters passed in the body of the request.
 * @param req - request
 * @param res - {
 */
export const updateDocente = async (req, res) => {
  const { id } = req.params;
  const {
    nombres,
    ap_paterno,
    ap_materno,
    grado_acedemico,
    area_encargada,
    dni,
    edad,
    sexo,
    telefono,
    estado
  } = req.body;
  try {
    if (
      !nombres ||
      !ap_paterno ||
      !ap_materno ||
      !grado_acedemico ||
      !area_encargada ||
      !dni ||
      !edad ||
      !sexo ||
      !telefono ||
      !estado
    ) {
      return res.status(206).json({
        message: 'Complete todos los campos'
      });
    }
    if (!id) {
      return res.status(206).json({
        message: 'Debe enviar el id para actualizar un docente'
      });
    }
    const docente = await Docente.update(
      {
        nombres,
        ap_paterno,
        ap_materno,
        grado_acedemico,
        area_encargada,
        dni,
        edad,
        sexo,
        telefono,
        estado
      },
      { where: { id } }
    );
    res.statu(200).json({
      message: 'Docente actualizado correctamente',
      data: docente
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrio un error al actualizar docente ' + e.message
    });
  }
};

/**
 * It deletes a docente from the database.
 * @param req - request
 * @param res - The response object.
 */
export const deleteDocente = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(206).json({
        message: 'Ingresar el id del docente'
      });
    }
    const docente = await Docente.destroy({ where: { id } });
    res.status(200).json({
      message: 'Docente eliminado correctamente',
      data: docente
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrio un error al eliminar el docente ' + e.message
    });
  }
};

export const getDocenteById = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(206).json({
        message: 'Ingresar el id del docente'
      });
    }
    const docente = await Docente.findOne({ where: { id } });
    if (!docente === null) {
      return res.status(404).json({
        message: 'Docente no encontrado'
      });
    }
    res.status(200).json({
      message: 'Docente encontrado',
      data: docente
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrio un error al buscar docente ' + e.message
    });
  }
};
