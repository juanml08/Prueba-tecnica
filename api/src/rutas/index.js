const { Router } = require("express");
const rutaLibros = require("./rutaLibros.js");
const rutaGeneros = require("./rutaGeneros.js");

const rutas = Router();

rutas.use("/libros", rutaLibros);
rutas.use("/generos", rutaGeneros);

module.exports = rutas;
