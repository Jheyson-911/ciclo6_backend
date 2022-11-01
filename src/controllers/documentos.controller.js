import { Documentos } from '../models/documentos.model.js';

/**
 * It's a function that returns a promise that resolves to an array of objects.
 * @param req - The request object.
 * @param res - The response object.
 */
export const getDocumentos = async (req, res) => {
  try {
    const documentos = await Documentos.findAll();
    if (!documentos.length > 0) {
      return res.status(206).json({
        message: 'No se encontraron documentos '
      });
    }
    res.status(200).json({
      message: 'Listado de todos lo documentos',
      data: documentos
    });
  } catch (e) {
    res.json({
      message: 'Ocurrió un error al obtener los documentos ' + e.message
    });
  }
};

/**
 * It's creating a new document in the database.
 * @param req - request
 * @param res - The response object.
 */
export const createDocumentos = async (req, res) => {
  try {
    /* It's checking if the request body is empty. */
    if (!Object.keys(req.body).length > 0) {
      return res.json({
        message: 'Tiene que enviar por lo menos un documento'
      });
    }
    const {
      carta_presentacion,
      carta_aceptacion,
      plan_ppp,
      constancia,
      informe_ppp,
      fk_practicaId
    } = req.body;

    const documentos = await Documentos.create({
      carta_presentacion,
      carta_aceptacion,
      plan_ppp,
      constancia,
      informe_ppp,
      fk_practicaId
    });
    res.json({
      message: 'Documento creado correctamente',
      data: documentos
    });
  } catch (e) {
    res.json({
      message: 'Ocurrió un error al crear el documento ' + e.message
    });
  }
};

/**
 * It's updating the documents of a student.
 * @param req - request
 * @param res - is the response object.
 */
export const updateDocumentos = async (req, res) => {
  const { id } = req.params;
  try {
    /* It's checking if the request body is empty. */
    if (!Object.keys(req.body).length > 0) {
      return res.json({
        message: 'Tiene que enviar por lo menos un documento a actualizar'
      });
    }
    if (!id) {
      return res.json({
        message: 'Debe enviar el id para actualizar'
      });
    }
    const {
      carta_presentacion,
      carta_aceptacion,
      plan_ppp,
      constancia,
      informe_ppp
    } = req.body;

    const documentos = await Documentos.update(
      {
        carta_presentacion,
        carta_aceptacion,
        plan_ppp,
        constancia,
        informe_ppp
      },
      { where: { id } }
    );
    res.json({
      message: 'Documentos actualizados correctamente',
      data: documentos
    });
  } catch (e) {
    res.json({
      message: 'Ocurrió un error al actualizar los documentos ' + e.message
    });
  }
};

export const getDocumentosById = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(404).json({
        message: 'Envié el id para encontrar los documentos'
      });
    }
    const documentos = await Documentos.findOne({ where: { id } });
    if (documentos === null) {
      return res.status(404).json({
        message: 'No se encontraron documentos'
      });
    }
    res.status(200).json({
      message: 'Documentos encontrados',
      data: documentos
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrió un error al obtener los documentos ' + e.message
    });
  }
};
