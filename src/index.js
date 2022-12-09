import app from './app.js';
import { sequelize } from './database/config.js';

const port = process.env.PORT || 3000;

async function destroyModel () {
  try {
    // eslint-disable-next-line object-curly-newline
    await sequelize.sync({ force: true });
    console.log('All models were synchronized successfully.');
    console.log(`listening on port  ${port}`);
  } catch (e) {
    console.log(`Ocurrio un error al eliminar los modelos ${e.message}`);
  }
}

const dato = false;

async function main () {
  try {
    if (dato) {
      destroyModel();
    }
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    app.listen(port, '192.168.1.104', () => {
      console.log(`listening on port http://192.168.1.104:${port}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
main();
