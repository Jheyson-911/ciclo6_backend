import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  let token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({
      message: 'No tienes autorización'
    });
  }
  try {
    token = token.split(' ')[1];
    let decoded = jwt.verify(token, '123');
    req.id = decoded.id;
    req.rol = decoded.rol;
    req.user = decoded.usuario;
    next();
  } catch (e) {
    res.status(401).json({
      message: 'Ocurrió un error de autenticación'
    });
  }
};
