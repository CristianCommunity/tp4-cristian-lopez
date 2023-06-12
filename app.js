//importar librerias
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const app = express();
const port = 6000;

//Configuración de los middlewares
app.use(morgan('dev'));

app.use(helmet());

app.use(cors());

app.use(express.json());

//Relaciona las rutas con las respuestas
app.use(require('./routes/app.routes'));

app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`)
})


