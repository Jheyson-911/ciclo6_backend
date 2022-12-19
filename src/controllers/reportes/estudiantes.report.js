import { Documentos } from '../../models/documentos.model.js';
import { Estudiante } from '../../models/estudiante.model.js';
import { Evaluacion } from '../../models/evaluacion.model.js';
import { Op } from 'sequelize';
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

export const enproceso = async (req, res) => {
  try {
    const proceso = await Estudiante.findAndCountAll({
      group: 'id',
      where: {
        estado_practicas: {
          [Op.eq]: 'EN PROCESO'
        }
        // fk_estudianteId: id
      }
    });
    const totalEstudiantes = await Estudiante.findAndCountAll({});
    res.status(200).json({
      message: 'Evaluaciones de la practica',
      data: [
        {
          proceso: Object.keys(proceso.count).length.toString(),
          total: totalEstudiantes.count.toString()
        }
      ]
      // proceso: proceso.count.toString()
    });
  } catch (e) {
    res.status(500).json({
      message:
        'Ocurrio un error al obtener evluaciones de la practica ' + e.message
    });
  }
};
export const finalizado = async (req, res) => {
  try {
    const proceso = await Estudiante.findAndCountAll({
      group: 'id',
      where: {
        estado_practicas: {
          [Op.eq]: 'FINALIZADO'
        }
        // fk_estudianteId: id
      }
    });
    const totalEstudiantes = await Estudiante.findAndCountAll({});
    res.status(200).json({
      message: 'Evaluaciones de la practica',
      data: [
        {
          finalizado: Object.keys(proceso.count).length.toString(),
          total: totalEstudiantes.count.toString()
        }
      ]
      // proceso: proceso.count.toString()
    });
  } catch (e) {
    res.status(500).json({
      message:
        'Ocurrio un error al obtener evluaciones de la practica ' + e.message
    });
  }
};
export const noInicio = async (req, res) => {
  try {
    const proceso = await Estudiante.findAndCountAll({
      group: 'id',
      where: {
        estado_practicas: {
          [Op.eq]: 'NO INICIO'
        }
        // fk_estudianteId: id
      }
    });
    const totalEstudiantes = await Estudiante.findAndCountAll({});
    res.status(200).json({
      message: 'Evaluaciones de la practica',
      data: [
        {
          inicio: Object.keys(proceso.count).length.toString(),
          total: totalEstudiantes.count.toString()
        }
      ]
      // proceso: proceso.count.toString()
    });
  } catch (e) {
    res.status(500).json({
      message:
        'Ocurrio un error al obtener evluaciones de la practica ' + e.message
    });
  }
};

export const misHorasPractica = async (req, res) => {
  const { id } = req.params;
  if (!(id > 0)) {
    return res.status(403).json({
      message: 'Ingrese un id valido'
    });
  }
  try {
    const mishoras = await Practicas.findAndCountAll({
      attributes: ['horas'],
      where: {
        fk_estudianteId: id
      }
    });
    // let totalhoras = 0;
    let horas_totales = mishoras.rows;

    let horasTotal = 0;

    for (let hora in horas_totales) {
      console.log(horas_totales[hora]['horas']);
      let horaatual = parseInt(horas_totales[hora]['horas']);
      horasTotal += horaatual;
    }

    res.status(200).json({
      message: 'Cantidad de horas acumuladas',
      // data: mishoras,
      horasTotal: horasTotal.toString()
    });
  } catch (e) {
    res.status(500).json({
      message:
        'Ocurrio un error al obtener evluaciones de la practica ' + e.message
    });
  }
};
