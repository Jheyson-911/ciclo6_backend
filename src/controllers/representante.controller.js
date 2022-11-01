import { Representante } from '../models/representante.model.js';

export const getRepresentantes = async (req, res) => {
  try {
    const representantes = await Representante.findAll();
    if (!representantes.length > 0) {
      return res.status(404).json({
        message: 'No se encontraron representantes que mostrar'
      });
    }
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrió un error al obtener los representantes ' + e.message
    });
  }
};

export const createRepresentante = async (req, res) => {
  const { nombre, cargo, area, fk_empresaId } = req.body;
  try {
    if (!nombre || !cargo || !area || !fk_empresaId) {
      return res.status(403).json({
        message: 'Complete todos los campos'
      });
    }
    const representante = await Representante.create({
      nombre,
      cargo,
      area,
      fk_empresaId
    });
    res.status(200).json({
      message: 'Representante creado correctamente',
      data: representante
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrió un error al crear el usuario ' + e.message
    });
  }
};

export const updateRepresentante = async (req, res) => {
  const { id } = req.params;
  const { nombre, cargo, area } = req.body;
  try {
    if (!id) {
      return res.status(403).json({
        message: 'Debe enviar el id para eliminar el representante'
      });
    }
    if (!nombre || !cargo || !area) {
      return res.status(403).json({
        message: 'Complete todos los campos'
      });
    }
    const representante = await Representante.update(
      { nombre, cargo, area },
      { where: { id } }
    );
    res.status(200).json({
      message: 'Representante actualizado correctamente',
      data: representante
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrió un error al actualizar el representante ' + e.message
    });
  }
};

export const deleteRepresentante = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(403).json({
        message: 'Debe enviar el id para eliminar el representante'
      });
    }
    const representante = await Representante.destroy({ where: { id } });
    res.status(200).json({
      message: 'Representante eliminado correctamente',
      data: representante
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrió un error al eliminar el representante ' + e.message
    });
  }
};

export const getRepresentanteById = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(403).json({
        message: 'Debe enviar el id para buscar el representante'
      });
    }
    const representante = await Representante.findOne({ where: { id } });
    if (representante === null) {
      return res.status(404).json({
        message: 'No se encontraron coincidencias'
      });
    }
    res.status(200).json({
      message: 'Representante encontrado',
      data: representante
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrió un error al obtener el representante ' + e.message
    });
  }
};
