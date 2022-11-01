import { Estudiante } from '../models/estudiante.model.js';

export const getEstudiantes = async (req, res) => {
  try {
    const estudiantes = await Estudiante.findAll();
    if (!estudiantes === null) {
      return res.status(404).json({
        message: 'No se encontraron estudiantes '
      });
    }
    res.status(200).json({
      message: 'Lista de estudiantes',
      data: estudiantes
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrio un error al listar los estudiantes ' + e.message
    });
  }
};

export const createEstudiante = async (req, res) => {
  const {
    codigo,
    nombres,
    ap_paterno,
    ap_materno,
    dni,
    edad,
    sexo,
    telefono,
    estado_practicas,
    fk_userId
  } = req.body;
  try {
    if (
      !codigo ||
      !nombres ||
      !ap_paterno ||
      !ap_materno ||
      !dni ||
      !edad ||
      !sexo ||
      !telefono ||
      !estado_practicas ||
      !fk_userId
    ) {
      return res.status(402).json({
        message: 'Complete todos los campos'
      });
    }
    const estudiante = await Estudiante.create({
      codigo,
      nombres,
      ap_paterno,
      ap_materno,
      dni,
      edad,
      sexo,
      telefono,
      estado_practicas,
      fk_userId
    });
    res.status(200).json({
      message: 'Estudiante creado correctamente',
      data: estudiante
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrio un error al crear el estudiante ' + e.message
    });
  }
};

export const updateEstudiante = async (req, res) => {
  const { id } = req.params;
  const {
    codigo,
    nombres,
    ap_paterno,
    ap_materno,
    dni,
    edad,
    sexo,
    telefono,
    estado_practicas
  } = req.body;
  try {
    if (
      !codigo ||
      !nombres ||
      !ap_paterno ||
      !ap_materno ||
      !dni ||
      !edad ||
      !sexo ||
      !telefono ||
      !estado_practicas
    ) {
      return res.status(402).json({
        message: 'Complete todos los campos'
      });
    }
    if (!id) {
      return res.status(403).json({
        message: 'Debe enviar el id para actualizar un estudiante'
      });
    }
    const estudiante = await Estudiante.update(
      {
        codigo,
        nombres,
        ap_paterno,
        ap_materno,
        dni,
        edad,
        sexo,
        telefono,
        estado_practicas
      },
      { where: { id } }
    );
    res.status(200).json({
      message: 'Estudiante actualizado correctamente',
      data: estudiante
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrió un error al actualizar el estudiante ' + e.message
    });
  }
};

export const deleteEstudiante = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      res.status(403).json({
        message: 'Debe enviar el id para eliminar un estudiante'
      });
    }
    const estudiante = await Estudiante.destroy({ where: { id } });
    res.status(200).json({
      message: 'Estudiante eliminado correctamente',
      data: estudiante
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrió un error al eliminar el estudiante ' + e.message
    });
  }
};

export const getEstudianteById = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.json({
        message: 'Debe enviar el id para obtener un estudiante'
      });
    }
    const estudiante = await Estudiante.findOne({ where: { id } });
    if (estudiante === null) {
      return res.status(404).json({
        message: 'No se encontró ningún estudiante'
      });
    }
    res.status(200).json({
      message: 'Estudiante encontrado',
      data: estudiante
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrió un error al buscar el estudiante ' + e.message
    });
  }
};
