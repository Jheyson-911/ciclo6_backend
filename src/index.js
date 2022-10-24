import app from './app.js'

import { sequelize } from './database/config.js'

let port = process.env.PORT || 3000;


async function main(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        app.listen(port , () =>{
            console.log("listening on port " + port);
        })
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main()