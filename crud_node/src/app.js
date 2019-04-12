const express = require('express');
const app = express();
//importar rutas
const indiceRutas=require('./rutas/index');

//usamos las rutas
app.use("/",indiceRutas);

//activar el servidor de escucha
app.listen(3000, () => {
	console.log("Escuchando en puerto 3000");
})