const { Libro, Genero } = require("../../db");

const getBooks = async () => {
  const booksFound = await Libro.findAll();
  return booksFound;
};

const createBook = async (body) => {
  try {
    const { titulo, autor, anio_publicacion, genero_id } = body;
    const findGenre = await Genero.findOne({
      where: { id: [genero_id] },
    });
    if (findGenre) {
      const newBook = await Libro.create({
        titulo,
        autor,
        anio_publicacion,
        genero_id: findGenre.id,
      });

      return newBook;
    }

    throw new Error("No se encuentra el género indicado");
  } catch (error) {
    console.log(error);
  }
};

const updateBook = async (bookId, body) => {
  try {
    const { titulo, autor, anio_publicacion, genero_id } = body;

    const findGenre = await Genero.findOne({
      where: { id: [genero_id] },
    });

    const bookToEdit = await Libro.findOne({
      where: { id: [bookId] },
    });

    if (findGenre && bookToEdit) {
      const numberUpdatedBooksArray = await Libro.update(
        {
          titulo,
          autor,
          anio_publicacion,
          genero_id: findGenre.id,
        },
        { where: { id: bookId } }
      );

      return numberUpdatedBooksArray;
    }

    throw new Error("Libro o Género no encontrado");
  } catch (error) {
    console.log(error);
  }
};

const deleteBook = async (bookId) => {
  const bookToDelete = await Libro.findOne({
    where: { id: [bookId] },
  });

  if (bookToDelete) {
    const numberDeletedBooks = await Libro.destroy({
      where: {
        id: bookId,
      },
    });

    return numberDeletedBooks;
  }
  throw new Error("Libro no encontrado");
};

module.exports = {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
};
