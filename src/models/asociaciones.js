/* Importing the models. */
import { Docente } from './docente.model.js';
import { Documentos } from './documentos.model.js';
import { Empresa } from './empresa.model.js';
import { Estudiante } from './estudiante.model.js';
import { Persona } from './persona.model.js';
import { Practicas } from './practicas.model.js';
import { Representante } from './representante.model.js';
import { Solicutd } from './solicitud.model.js';
import { User } from './user.model.js';

/* A way to define the relationships between the models. */
Persona.hasOne(User, {
  foreignKey: 'fk_personaId'
});
User.belongsTo(Persona, {
  foreignKey: 'fk_personaId'
});

Persona.hasOne(Docente, {
  foreignKey: {
    name: 'fk_personaId'
  }
});
Docente.belongsTo(Persona, {
  foreignKey: {
    name: 'fk_personaId'
  }
});

Persona.hasOne(Estudiante, {
  foreignKey: {
    name: 'fk_personaId'
  }
});
Estudiante.belongsTo(Persona, {
  foreignKey: {
    name: 'fk_personaId'
  }
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

Estudiante.hasMany(Practicas, {
  foreignKey: 'fk_estudianteId'
});
Practicas.belongsTo(Estudiante, {
  foreignKey: 'fk_personaId'
});

Estudiante.hasMany(Solicutd, {
  foreignKey: {
    name: 'fk_estudianteId'
  }
});
Solicutd.belongsTo(Estudiante, {
  foreignKey: {
    name: 'fk_estudianteId'
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

Practicas.hasOne(Empresa, {
  foreignKey: {
    name: 'fk_practicaId'
  }
});
Empresa.belongsTo(Practicas, {
  foreignKey: {
    name: 'fk_practicaId'
  }
});
