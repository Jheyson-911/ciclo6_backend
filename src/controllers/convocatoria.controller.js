import { Convocatoria } from '../models/convocatoria.model.js';

export const getConvocatorias = async (req, res) => {
  try {
    const convocatoria = await Convocatoria.findAll();
    if (!convocatoria.length > 0) {
      return res.json({
        message: 'No se encontraron convocatorias'
      });
    }
    res.json({
      message: 'Lista de convocatorias',
      data: convocatoria
    });
  } catch (e) {
    res.json({
      message: 'Ocurrio un error al obtener las convocatorias ' + e.message
    });
  }
};

export const createConvocatoria = async (req, res) => {
  const { descripcion, cupos, cargo, tiempo, lugar, fecha_limite, telefono, fk_empresaId } = req.body;
  try {
    if (!descripcion || !cupos || !cargo || !tiempo || !lugar || !fecha_limite || !telefono || !fk_empresaId) {
      return res.json({
        message: 'Complete todos los campos'
      });
    }
    
    const convocatoria = await Convocatoria.create({
      descripcion,
      cupos,
      cargo,
      tiempo,
      lugar,
      fecha_limite,
      telefono,
      fk_empresaId
    });
    res.json({
      message: 'Convocatoria creada correctamente',
      data: convocatoria
    });
  } catch (e) {
    res.json({
      message: 'Ocurrio un error al crear la convocatoria ' + e.message
    });
  }
};

export const updateConvocatoria = async (req, res) => {
  const { id } = req.params;
  const { descripcion, cupos, cargo, tiempo, lugar, fecha_limite, telefono, fk_empresaId } = req.body;
  try {
    if (!(id > 0)) {
      return res.status(403).json({
        message: 'Ingrese un id valido'
      });
    }
    if (!descripcion || !cupos || !cargo || !lugar || !tiempo || !fecha_limite || !telefono || !fk_empresaId) {
      return res.status(403).json({
        message: 'Complete todos los campos'
      });
    }
    const convocatoria = await Convocatoria.update(
      {
        descripcion,
        cupos,
        cargo,
        tiempo,
        lugar,
        fecha_limite,
        telefono,
        fk_empresaId
      },
      { where: { id } }
    );
    res.json({
      message: 'Convocatoria actualizada correctamente',
      data: convocatoria
    });
  } catch (e) {
    res.json({
      message: 'Ocurrio un error al actualizar la convocatoria ' + e.message
    });
  }
};

export const deleteConvocatoria = async (req, res) => {
  const { id } = req.params;
  try {
    if (!(id > 0)) {
      return res.status(403).json({
        message: 'Ingrese un id valido'
      });
    }
    const convocatoria = await Convocatoria.destroy({ where: { id } });
    res.json({
      message: 'Convocatoria eliminada correctamente',
      data: convocatoria
    });
  } catch (e) {
    res.json({
      message: 'Ocurrio un error al eliminar la convocatoria ' + e.message
    });
  }
};

export const getConvocatoriaById = async (req, res) => {
  const { id } = req.params;
  try {
    if (!(id > 0)) {
      return res.status(403).json({
        message: 'Ingrese un id valido'
      });
    }
    const convocatoria = await Convocatoria.findOne({ where: { id } });
    if (convocatoria === null) {
      return res.status(404).json({
        message: 'NO se encontro ninguna convocatoria'
      });
    }
    res.json({
      message: 'Convocatoria encontrada',
      data: convocatoria
    });
  } catch (e) {
    res.json({
      message: 'Ocurrio un error al buscar la convocatoria ' + e.message
    });
  }
};
