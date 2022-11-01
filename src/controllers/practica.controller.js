import { Practicas } from '../models/practicas.model.js';

export const getPracticas = async (req, res) => {
  try {
    const practicas = await Practicas.findAll();
    if (practicas === null) {
      return res.status(404).json({
        message: 'No se encontraron solicitudes'
      });
    }
    res.status(200).json({
      message: 'Lista de practicas',
      data: practicas
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrio un error al listar todas las practicas ' + e.message
    });
  }
};

export const createPractica = async (req, res) => {
  const { f_inicio, f_fin, horas, estado, fk_estudianteId, fk_empresaId } =
    req.body;
  try {
    if (!f_inicio || !f_fin || !horas || !fk_estudianteId || fk_empresaId) {
      return res.status(403).json({
        message: 'Complete todos los campos'
      });
    }
    if (!estado) {
      const practica = await Practicas.create({
        f_inicio,
        f_fin,
        horas,
        estado: 'EN PROCESO',
        fk_estudianteId,
        fk_empresaId
      });
      return res.status(200).json({
        message: 'Practica creada correctamente',
        data: practica
      });
    }
    const practica = await Practicas.create({
      f_inicio,
      f_fin,
      horas,
      estado,
      fk_estudianteId,
      fk_empresaId
    });
    res.status(200).json({
      message: 'Practica creada correctamente',
      data: practica
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrio un error al crear la practica ' + e.message
    });
  }
};

export const updatePractica = async (req, res) => {
  const { id } = req.params;
  const { f_inicio, f_fin, horas, estado, fk_estudianteId, fk_empresaId } =
    req.body;
  try {
    if (!id) {
      return res.status(403).json({
        message: 'Debe enviar el id para actualizar la practica'
      });
    }
    if (
      !f_inicio ||
      !f_fin ||
      !horas ||
      !estado ||
      !fk_estudianteId ||
      fk_empresaId
    ) {
      return res.status(403).json({
        message: 'Complete todos los campos'
      });
    }
    const practica = await Practicas.update(
      {
        f_inicio,
        f_fin,
        horas,
        estado,
        fk_estudianteId,
        fk_empresaId
      },
      { where: { id } }
    );
    res.status(200).json({
      message: 'Practica actualizada correctamente ',
      data: practica
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrio un error al actualizar la practica ' + e.message
    });
  }
};

export const deletePractica = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.staus(403).json({
        message: 'Debe enviar el id para eliminar la practica'
      });
    }
    const practica = await Practicas.destroy({ where: { id } });

    res.status(200).json({
      message: 'Practica eliminada correctamente',
      data: practica
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrio un error al eliminar la practica ' + e.message
    });
  }
};
