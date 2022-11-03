import { Documentos } from '../../models/documentos.model.js';
import { Estudiante } from '../../models/estudiante.model.js';
import { Evaluacion } from '../../models/evaluacion.model.js';
import { Practicas } from '../../models/practicas.model.js';

export const getPracticeByStudent = async (req, res) => {
  const { id } = req.params;
  if (!(id > 0)) {
    return res.status(403).json({
      message: 'Ingrese un id valido'
    });
  }
  try {
    const practicas = await Practicas.findAll({
      where: {
        fk_estudianteId: id
      }
      // include: [
      //   {
      //     model: Practicas,
      //     where: {
      //       fk_estudianteId: id
      //     }
      //   }
      // ]
    });
    if (!practicas.length > 0) {
      return res.status(404).json({
        message: 'No se encontraron practicas del estudiante '
      });
    }
    res.json({
      message: 'Practicas del estudiante',
      data: practicas
    });
  } catch (e) {
    res.status(500).json({
      message:
        'Ocurrió un error al obtener los estudiantes de la empresa ' + e.message
    });
  }
};
export const getEstudentByEmpresa = async (req, res) => {
  const { id } = req.params;
  if (!(id > 0)) {
    return res.status(403).json({
      message: 'Ingrese un id valido'
    });
  }
  try {
    const estudiantes = await Practicas.findAll({
      where: {
        fk_empresaId: id
      },
      attributes: [],
      include: [
        {
          model: Estudiante,
          attributes: [
            'codigo',
            'nombres',
            'ap_paterno',
            'ap_materno',
            'estado_practicas'
          ]
        }
      ]
    });
    if (!estudiantes.length > 0) {
      return res.status(404).json({
        message: 'No se encontraron estudiantes en la empresa '
      });
    }
    res.status(200).json({
      message: 'Lista de estudiantes por empresa',
      data: estudiantes
    });
  } catch (e) {
    res.status(500).json({
      message:
        'Ocurrio un error ak obtener los estudiantes por empresa ' + e.message
    });
  }
};

export const documentoByPractica = async (req, res) => {
  const { id } = req.params;
  if (!(id > 0)) {
    return res.status(403).json({
      message: 'Ingrese un id valido'
    });
  }
  try {
    const documentos = await Documentos.findAll({
      where: {
        fk_practicaId: id
      }
    });
    if (!documentos.length > 0) {
      return res.status(404).json({
        message: 'no se encontraron documentos en la practica'
      });
    }
    res.status(200).json({
      message: 'Lista de documentos de la practica',
      data: documentos
    });
  } catch (e) {
    res.status(500).json({
      message:
        'Ocurrió un error al obtener documentos de la practica ' + e.message
    });
  }
};

export const evaluacionByPractica = async (req, res) => {
  const { id } = req.params;
  if (!(id > 0)) {
    return res.status(403).json({
      message: 'Ingrese un id valido'
    });
  }
  try {
    const evaluaciones = await Evaluacion.findAll({
      where: {
        fk_practicaId: id
      }
    });
    if (!evaluaciones.length > 0) {
      return res.status(403).json({
        message: 'No se econtraron evaluaciones para la practica'
      });
    }
    res.status(200).json({
      message: 'Evaluaciones de la practica',
      data: evaluaciones
    });
  } catch (e) {
    res.status(500).json({
      message:
        'Ocurrio un error al obtener evluaciones de la practica ' + e.message
    });
  }
};
