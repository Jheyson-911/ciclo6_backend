import { Estudiante } from '../../models/estudiante.model.js';
import { Practicas } from '../../models/practicas.model.js';
import { Empresa } from '../../models/empresa.model.js';

export const getPracticeByStudent = async (req, res) => {
  const { id } = req.params;
  if (!id > 0) {
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
  if (!id > 0) {
    return res.status(403).json({
      message: 'Ingrese un id valido'
    });
  }
  try {
    let practicas = await Practicas.findAll({
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
    res.status(200).json({
      message: 'Lista de estudiantes por empresa',
      data: practicas
    });
  } catch (e) {
    res.status(500).json({
      message:
        'Ocurrio un error ak obtener los estudiantes por empresa ' + e.message
    });
  }
};
