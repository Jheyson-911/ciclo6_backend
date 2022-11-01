import { Empresa } from '../models/empresa.model.js';
export const getEmpresas = async (req, res) => {
  try {
    const empresas = await Empresa.findAll();
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
  const { nombre, ruc, actividad, sector, direccion, convenio } = req.body;
  try {
    if (!(id > 0)) {
      return res.status(403).json({
        message: 'Ingrese un id valido'
      });
    }
    if (!nombre || !ruc || !actividad || !sector || !direccion || !convenio) {
      return res.status(403).json({
        message: 'Complete todos los campos'
      });
    }
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
    if (!(id > 0)) {
      return res.status(403).json({
        message: 'Ingrese un id valido'
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
    if (!(id > 0)) {
      return res.status(403).json({
        message: 'Ingrese un id valido'
      });
    }
    const empresa = await Empresa.findOne({ where: { id } });
    if (empresa === null) {
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
