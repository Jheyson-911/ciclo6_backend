import { Evaluacion } from '../models/evaluacion.model.js';

export const getEvaluaciones = async (req, res) => {
  try {
    const evaluaciones = await Evaluacion.findAll();
    if (!evaluaciones.length > 0) {
      return res.status(404).json({
        message: 'No se encontraron evaluaciones'
      });
    }
    res.status(200).json({
      message: 'Lista de las evaluaciones',
      data: evaluaciones
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrió un error al listar las evaluaciones ' + e.message
    });
  }
};

export const createEvaluacion = async (req, res) => {
  const { fase, fecha, calificacion, observaciones, estado, fk_practicaId } =
    req.body;
  try {
    if (
      !fase ||
      !fecha ||
      !calificacion ||
      !observaciones ||
      !estado ||
      !fk_practicaId
    ) {
      return res.status(403).json({
        message: 'Complete todos los campos'
      });
    }
    const evaluacion = await Evaluacion.create({
      fase,
      fecha,
      calificacion,
      observaciones,
      estado,
      fk_practicaId
    });
    res.status(200).json({
      message: 'Evaluacion creada correctamente',
      data: evaluacion
    });
  } catch (e) {
    res.status(500).josn({
      message: 'Ocurrio une error al crear la evaluacion ' + e.message
    });
  }
};
export const updateEvaluacion = async (req, res) => {
  const { id } = req.params;
  const { fase, fecha, calificacion, observaciones, estado } = req.body;
  try {
    if (!id) {
      return res.status(403).json({
        message: 'Debe enviar el id para actualizar una evaluacion'
      });
    }
    if (!fase || !fecha || !calificacion || !observaciones || !estado) {
      return res.status(403).json({
        message: 'Complete todos los campos'
      });
    }
    const evaluacion = await Evaluacion.update(
      {
        fase,
        fecha,
        calificacion,
        observaciones,
        estado
      },
      { where: { id } }
    );
    res.status(200).json({
      message: 'Evaluacion creada correctamente',
      data: evaluacion
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrió une error al crear la evaluacion ' + e.message
    });
  }
};
export const deleteEvaluacion = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(404).json({
        message: 'Debe enviar el id para eliminar la evaluacion'
      });
    }
    const evaluacion = await Evaluacion.destroy({ where: { id } });
    res.status(200).json({
      message: 'Evaluacion eliminada correctamente',
      data: evaluacion
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrió un error al eliminar la evaluacion ' + e.message
    });
  }
};

export const getEvaluacionById = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(404).json({
        message: 'Debe enviar el id para eliminar la evaluacion'
      });
    }
    const evaluacion = await Evaluacion.findOne({ where: { id } });
    res.status(200).json({
      message: 'Evluacion encontrada',
      data: evaluacion
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrió un error al buscar la evaluacion ' + e.message
    });
  }
};
