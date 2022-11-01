import { Empresa } from '../models/empresa.model.js';

/**
 * It's checking if the array is empty
 * @param req - The request object represents the HTTP request and has properties for the request
 * query string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
export const getEmpresas = async (req, res) => {
  try {
    const empresas = await Empresa.findAll();
    /* It's checking if the array is empty. */
    if (!empresas.length > 0) {
      return res.json({
        message: 'No se encontraron empresas'
      });
    }
    res.json({
      message: 'Lista de empresas',
      data: empresas
    });
  } catch (e) {
    res.json({
      message: 'Ocurrio un error al obtener las empresas ' + e.message
    });
  }
};

export const createEmpresa = async (req, res) => {
  const { nombre, ruc, actividad, sector, direccion, convenio } = req.body;
  try {
    if (!nombre || !ruc || !actividad || !sector || !direccion) {
      return res.json({
        message: 'Complete todos los campos'
      });
    }
    if (!convenio) {
      const empresa = await Empresa.create({
        nombre,
        ruc,
        actividad,
        sector,
        direccion,
        convenio: 'NO'
      });
      return res.json({
        message: 'Empresa creada correctamente',
        data: empresa
      });
    }
    const empresa = await Empresa.create({
      nombre,
      ruc,
      actividad,
      sector,
      direccion,
      convenio
    });
    res.json({
      message: 'Empresa creada correctamente',
      data: empresa
    });
  } catch (e) {
    res.json({
      message: 'Ocurrio un error al crear la empresa ' + e.message
    });
  }
};

export const updateEmpresa = async (req, res) => {
  const { id } = req.params;
  try {
    if (!Object.keys(req.body).length > 0) {
      return res.json({
        message: 'Tiene que enviar por lo menos un campo  actualizar'
      });
    }
    if (!id) {
      return res.json({
        message: 'Debe enviar el id para actualizar'
      });
    }
    const { nombre, ruc, actividad, sector, direccion, convenio } = req.body;
    const empresa = await Empresa.update(
      {
        nombre,
        ruc,
        actividad,
        sector,
        direccion,
        convenio
      },
      { where: { id } }
    );
    res.json({
      message: 'Empresa actualizada correctamente',
      data: empresa
    });
  } catch (e) {
    res.json({
      message: 'Ocurrio un error al actualizar la empresa ' + e.message
    });
  }
};

export const deleteEmpresa = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.json({
        message: 'Debe enviar el id para eliminar'
      });
    }
    const empresa = await Empresa.destroy({ where: { id } });
    res.json({
      message: 'Empresa eliminada correctamente',
      data: empresa
    });
  } catch (e) {
    res.json({
      message: 'Ocurrio un error al eliminar la empresa ' + e.message
    });
  }
};

export const getEmpresaById = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.json({
        message: 'Debe enviar el id para buscar la empresa'
      });
    }
    const empresa = await Empresa.findOne({ where: { id } });
    if (!empresa.length > 0) {
      return res.status(404).json({
        message: 'NO se encontro ninguna empresa'
      });
    }
    res.json({
      message: 'Empresa encontrada',
      data: empresa
    });
  } catch (e) {
    res.json({
      message: 'Ocurrio un error al buscar la empresa ' + e.message
    });
  }
};
