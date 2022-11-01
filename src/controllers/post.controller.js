import { Post } from '../models/post.model.js';

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    if (!posts.length > 0) {
      return res.status(404).json({
        message: 'No se encontraron posts'
      });
    }
    res.status(200).json({
      message: 'Lista de posts',
      data: posts
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrió un error al obtener los posts ' + e.message
    });
  }
};

export const createPost = async (req, res) => {
  const { titulo, descripcion, fk_userId } = req.body;
  try {
    if (!titulo || !descripcion || !fk_userId) {
      return res.status(403).json({
        message: 'Complete todos los campos'
      });
    }
    const post = await Post.create({ titulo, descripcion, fk_userId });
    res.status(200).json({
      message: 'Post creado correctamente',
      data: post
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrió un error al crear el post ' + e.message
    });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { titulo, descripcion } = req.body;
  try {
    if (!(id > 0)) {
      return res.status(403).json({
        message: 'Ingrese un id valido'
      });
    }
    if (!titulo || !descripcion) {
      return res.status(403).json({
        message: 'Complete todos los campos'
      });
    }
    const post = await Post.update(
      {
        titulo,
        descripcion
      },
      { where: { id } }
    );
    res.status(200).json({
      message: 'Post creado correctamente',
      data: post
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrió un error al actualizar el post ' + e.message
    });
  }
};
export const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    if (!(id > 0)) {
      return res.status(403).json({
        message: 'Ingrese un id valido'
      });
    }
    const post = await Post.destroy({ where: { id } });
    res.status(200).json({
      message: 'Post eliminado correctamente',
      data: post
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrió un error al eliminar el post ' + e.message
    });
  }
};
export const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(403).json({
        message: 'Debe enviar el id para eliminar el post '
      });
    }
    const post = await Post.findOne({ where: { id } });
    if (post === null) {
      return res.status(404).json({
        message: 'No se encontró el post'
      });
    }
    res.status(200).json({
      message: 'Post encontrado',
      data: post
    });
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrió un error al obtener el post ' + e.message
    });
  }
};
