//importar librerias
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const app = express();
const port = 6000;

app.use(morgan('dev'));



app.use(require('./routes/app.routes'));

app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`)
})

