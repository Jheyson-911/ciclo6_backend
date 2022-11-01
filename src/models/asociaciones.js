/* Importing the models. */
import { Docente } from './docente.model.js';
import { Documentos } from './documentos.model.js';
import { Empresa } from './empresa.model.js';
import { Estudiante } from './estudiante.model.js';
import { Evaluacion } from './evaluacion.model.js';
import { Post } from './post.model.js';
import { Practicas } from './practicas.model.js';
import { Representante } from './representante.model.js';
import { Solicitud } from './solicitud.model.js';
import { User } from './user.model.js';

/* A way to define the relationships between the models. */
// LOGIN

User.hasOne(Estudiante, {
  foreignKey: {
    name: 'fk_userId'
  }
});
Estudiante.belongsTo(User, {
  foreignKey: {
    name: 'fk_userId'
  }
});
User.hasOne(Docente, {
  foreignKey: {
    name: 'fk_userId'
  }
});
Docente.belongsTo(User, {
  foreignKey: {
    name: 'fk_userId'
  }
});

// END LOGIN

// SOLICITUD

Estudiante.hasMany(Solicitud, {
  foreignKey: {
    name: 'fk_estudianteId'
  }
});
Solicitud.belongsTo(Estudiante, {
  foreignKey: {
    name: 'fk_estudianteId'
  }
});
// END SOLICITUD

// PRACTICAS

Estudiante.hasMany(Practicas, {
  foreignKey: 'fk_estudianteId'
});
Practicas.belongsTo(Estudiante, {
  foreignKey: 'fk_estudianteId'
});

Practicas.hasOne(Documentos, {
  foreignKey: {
    name: 'fk_practicaId'
  }
});
Documentos.belongsTo(Practicas, {
  foreignKey: {
    name: 'fk_practicaId'
  }
});

Empresa.hasOne(Practicas, {
  foreignKey: {
    name: 'fk_empresaId'
  }
});
Practicas.belongsTo(Empresa, {
  foreignKey: {
    name: 'fk_empresaId'
  }
});

Empresa.hasMany(Representante, {
  foreignKey: {
    name: 'fk_empresaId'
  }
});
Representante.belongsTo(Empresa, {
  foreignKey: {
    name: 'fk_empresaId'
  }
});
// END PRACTICAS

// EVALUACIÓN

Practicas.hasMany(Evaluacion, {
  foreignKey: {
    name: 'fk_practicaId'
  }
});
Evaluacion.belongsTo(Practicas, {
  foreignKey: {
    name: 'fk_practicaId'
  }
});

Docente.hasMany(Evaluacion, {
  foreignKey: {
    name: 'fk_docenteId'
  }
});
Evaluacion.belongsTo(Docente, {
  foreignKey: {
    name: 'fk_docenteId'
  }
});
// END EVALUACIÓN

// POST

User.hasMany(Post, {
  foreignKey: {
    name: 'fk_userId'
  }
});
Post.belongsTo(User, {
  foreignKey: {
    name: 'fk_userId'
  }
});
// END POST
