const express = require('express');
const rutas = express.Router();
const customerController = require('../controllers/customerController');

//get es lo que solicita el navegador del cliente
// rutas.get("/",(req,res)=>{
// 	res.send("Hola mundo Node");
// })
// module.exports = rutas;

rutas.get('/', customerController.list);
rutas.post('/add', customerController.save);
// rutas.post('/add', customerController.save);
// rutas.get('/delete/:id', customerController.delete);
// rutas.get('/update/:id', customerController.edit); 
// rutas.get('/update/:id', customerController.update); 

module.exports = rutas;