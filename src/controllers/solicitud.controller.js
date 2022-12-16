import { Solicitud } from '../models/solicitud.model.js';

export const getSolicitudes = async (req, res) => {
  try {
    const solicitudes = await Solicitud.findAll();
    if (!solicitudes.length > 0) {
      return res.status(404).json({
        message: 'No se encontraron solicitudes'
      });
    }
    res.status(200).json({
      message: 'Lista de las solicitudes',
      data: solicitudes
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrió un error al obtener las solicitudes ' + e.message
    });
  }
};

export const createSolicitud = async (req, res) => {
  const {
    nombre_empresa,
    ruc,
    actividad,
    sector,
    direccion,
    representante,
    cargo,
    area,
    descripcion
  } = req.body;
  try {
    if (
      !nombre_empresa ||
      !ruc ||
      !actividad ||
      !sector ||
      !direccion ||
      !representante ||
      !cargo ||
      !area ||
      !descripcion
    ) {
      return res.status(500).json({
        message: 'Complete todos los campos'
      });
    }
    const solicitud = await Solicitud.create({
      nombre_empresa,
      ruc,
      actividad,
      sector,
      direccion,
      representante,
      cargo,
      area,
      descripcion,
      estado: 'EN PROCESO',
      fk_estudianteId: req.params.id
    });
    res.status(200).json({
      message: 'Solicitud creada correctamente',
      data: solicitud
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrió un error al crear la xolicitud ' + e.message
    });
  }
};

export const updateSolicitud = async (req, res) => {
  const { id } = req.params;
  const {
    nombre_empresa,
    ruc,
    actividad,
    sector,
    direccion,
    representante,
    cargo,
    area,
    descripcion
  } = req.body;
  try {
    if (!(id > 0)) {
      return res.status(403).json({
        message: 'Ingrese un id valido'
      });
    }
    if (
      !nombre_empresa ||
      !ruc ||
      !actividad ||
      !sector ||
      !direccion ||
      !representante ||
      !cargo ||
      !area ||
      !descripcion
    ) {
      return res.status(500).json({
        message: 'Complete todos los campos'
      });
    }
    const solicitud = await Solicitud.update(
      {
        nombre_empresa,
        ruc,
        actividad,
        sector,
        direccion,
        representante,
        cargo,
        area,
        descripcion
      },
      { where: { id } }
    );
    if (solicitud === null) {
      return res.status(404).json({
        message: 'No se actualizo la solicitud '
      });
    }
    res.status(200).json({
      message: 'Solicitud actualizada correctamente',
      data: solicitud
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrió un error al actualizar la solicitud ' + e.message
    });
  }
};

export const deleteSolicitud = async (req, res) => {
  const { id } = req.params;
  try {
    if (!(id > 0)) {
      return res.status(403).json({
        message: 'Ingrese un id valido'
      });
    }
    const solicitud = await Solicitud.destroy({ where: { id } });
    res.status(200).json({
      message: 'Solicitud eliminada correctamente',
      data: solicitud
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrió un error al eliminar la solicitud ' + e.message
    });
  }
};

export const getSolicitudesById = async (req, res) => {
  const { id } = req.params;
  try {
    if (!(id > 0)) {
      return res.status(403).json({
        message: 'Ingrese un id valido'
      });
    }
    const solicitud = await Solicitud.findOne({ where: { id } });
    if (solicitud === null) {
      return res.status(404).json({
        message: 'No se encontró la solicitud'
      });
    }
    res.status(200).json({
      message: 'Solicitud encontrada',
      data: solicitud
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrió un error al obtener la solicitud ' + e.message
    });
  }
};
