const { Libro, Genero } = require("../../db.js");

const getGenres = async () => {
  const genresFound = await Genero.findAll();

  return genresFound;
};

module.exports = {
  getGenres,
};
